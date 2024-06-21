import React from "react";

import UserAccountForm from "./user-account";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/auth/login");
  }

  return (
    <>
      <UserAccountForm user={user} />
    </>
  );
}

export default page;
