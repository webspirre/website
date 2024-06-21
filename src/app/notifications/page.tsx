import React from "react";
import Notification from "./notification";
import { createClient } from "@/libs/supabase/server";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: notifications } = await supabase.from("notifications").select();
  console.log("Notification Data", notifications);
  return (
    <div>
      <Notification notifications={notifications} />
    </div>
  );
}

export default page;
