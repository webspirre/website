import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/types_db";

// Define a function to create a Supabase client for client-side operations
export const createClient = () =>
  createBrowserClient<Database>(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL_DESIGN! || "https://jplgamffqvnzruoyxdyg.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_DESIGN! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwbGdhbWZmcXZuenJ1b3l4ZHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTQ4NTYsImV4cCI6MjAzMjQ5MDg1Nn0.DGkv3zLoxjKofTVYWhB-be4UGBEfvaGD-8i1xTi5bbw"
  );
