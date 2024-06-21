import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/libs/supabase/server"; // Adjust the import based on your directory structure

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient();
  const { access_token, refresh_token } = req.query;

  // Store tokens securely and perform additional actions as needed
  // Redirect to the appropriate page after successful login
  res.redirect("/");
}
