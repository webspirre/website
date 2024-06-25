// supabaseAdminClient.js
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/types_db";

// Define a function to create a Supabase client for admin operations
export const createAdminClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_ADMIN_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_ADMIN_KEY!,
    {
      auth: {
        storageKey: "admin_supabase_auth_token", // Custom key for admin tokens
      },
    }
  );
