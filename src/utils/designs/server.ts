import { createClient } from "../../libs/supbasedesign/client";
import { DesignT } from "@/types/Design.type";

export const fetchDesigns = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("website").select("*");
  if (error) console.error("Error fetching designs:", error);
  else return data;
};
