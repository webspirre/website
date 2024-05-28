// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { file, userId } = req.body;

  if (!file || !userId) {
    return res.status(400).json({ error: 'Missing file or user ID' });
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
    return res.status(500).json({ error: error.message });
  }

  // Get public URL of the uploaded image
  const {data: DT } = supabase.storage.from('profile-images').getPublicUrl(`${userId}/profile-image`);

  // Update user profile with the new image URL
  const { error: updateError } = await supabase
    .from('users')
    .update({ profile_image_url: DT?.publicUrl })
    .eq('id', userId);

  if (updateError) {
    return res.status(500).json({ error: updateError.message });
  }

  res.status(200).json({ url: DT?.publicUrl });
};
