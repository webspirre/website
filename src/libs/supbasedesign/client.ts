// supabaseAdminClient.js
import { DesignDatabase } from "@/types/design_type_db";
import { createBrowserClient } from "@supabase/ssr";

export const createAdminClient = () => {
  return createBrowserClient<DesignDatabase>(
    // process.env.NEXT_PUBLIC_SUPABASE_ADMIN_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_ADMIN_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        storageKey: "admin_supabase_auth_token", // Custom key for admin tokens
      },
      db: {
        schema: "webspirre_admin", // Specify the schema for admin operations
      },
    }
  );
};

// // supabaseAdminClient.js
// import { createBrowserClient } from "@supabase/ssr";
// import { Database } from "@/types/types_db";

// // Define a function to create a Supabase client for admin operations
// export const createAdminClient = () =>
//   createBrowserClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_ADMIN_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_ADMIN_KEY!,
//     {
//       auth: {
//         storageKey: "admin_supabase_auth_token", // Custom key for admin tokens
//       },
//     }
//   );
