import { createClient } from "@/libs/supabase/server";

export const fetchNotifications = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("notifications").select("*");
  if (error) console.error("Error fetching notifications:", error);
  else return data;
};
