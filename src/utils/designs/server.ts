import { createAdminClient } from "../../libs/supbasedesign/client";
import { DesignT } from "@/types/Design.type";

export const fetchDesigns = async () => {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("website").select("*");
  if (error) console.error("Error fetching designs:", error);
  else return data;
};

export const fetchDesignByID = async (id: any) => {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("website")
    .select()
    // .match({ uid: id })
    .eq("uid", id)
    .single();
  if (error) console.error("Error fetching designs:", error);
  else return data;
};
