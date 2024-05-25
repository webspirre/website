import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseUrl = "https://yzaqysrwnqfefhjxmcbt.supabase.co";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YXF5c3J3bnFmZWZoanhtY2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NTA4MzcsImV4cCI6MjAyNjUyNjgzN30.pw6PWByqRNb7b92AZWB8ZbGBfbEo0A4PoA0MnMfIHb4";

export const supabase = createClient(supabaseUrl, supabaseKey);
