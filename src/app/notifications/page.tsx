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

  // Fetch notifications where uid equals the user id
  const { data: notifications, error } = await supabase
    .from("notifications")
    .select()
    .eq("uid", user.id);

  if (error) {
    console.error("Error fetching notifications:", error);
    // Handle the error appropriately here
  }

  return (
    <div>
      <Notification notifications={notifications} />
    </div>
  );
}

export default page;
