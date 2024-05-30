import React from "react";

import UserAccountForm from "./user-account";
import { createClient } from "@/libs/supabase/server";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // const getUser = async (): Promise<SupabaseResponse> => {
  //   const { data, error } = await supabase.auth.getUser();

  //   return {
  //     user: data?.user || null,
  //     error: error || null,
  //   };
  // };

  return (
    <>
      <UserAccountForm user={user} />
    </>
  );
}

export default page;
