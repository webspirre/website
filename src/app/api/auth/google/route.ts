import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/libs/supabase/server"; // Adjust the import based on your directory structure

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`, // Replace with your callback URL
    },
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.redirect(data.url);
}
