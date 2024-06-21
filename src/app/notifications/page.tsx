import React from "react";
import Notification from "./notification";
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
  const { data: notifications } = await supabase.from("notifications").select();
  console.log("Notification Data", notifications);
  return (
    <div>
      <Notification notifications={notifications} />
    </div>
  );
}

export default page;
