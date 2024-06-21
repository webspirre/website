import { createBrowserClient } from "@supabase/ssr";

export function supabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dnJvaXpiZGZ2Y3hnZ3JpbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MDU5MzQsImV4cCI6MjAzMjE4MTkzNH0.idCpsxT2KZundURpuqrE-Y8aMNAoEdnD1_xWvxpZbwk",
    // "https://mxvroizbdfvcxggrimya.supabase.co"
  );
}
