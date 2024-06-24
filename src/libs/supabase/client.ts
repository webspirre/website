import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/types_db";

// Define a function to create a Supabase client for client-side operations
export const createClient = () =>
  createBrowserClient<Database>(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        storageKey: "public_supabase_auth_token", // Custom key for admin tokens
      },
    }
  );


  export const createPublicClient = () =>
    createBrowserClient<Database>(
      // Pass Supabase URL and anonymous key from the environment to the client
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          storageKey: "public_supabase_auth_token", // Custom key for admin tokens
        },
      }
    );
