import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const { file, userId } = await req.json();

  if (!file || !userId) {
    return NextResponse.json({ error: 'Missing file or user ID' }, { status: 400 });
  }

  // Decode base64 file
  const buffer = Buffer.from(file.split(",")[1], 'base64');

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('profile-images')
    .upload(`${userId}/profile-image`, buffer, {
      contentType: 'image/png', // Change as needed
      upsert: true
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get public URL of the uploaded image
  const { data: publicUrlData } = supabase.storage.from('profile-images').getPublicUrl(`${userId}/profile-image`);

  // Update user profile with the new image URL
  const { error: updateError } = await supabase
    .from('users')
    .update({ profile_image_url: publicUrlData?.publicUrl })
    .eq('id', userId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ url: publicUrlData?.publicUrl }, { status: 200 });
}
