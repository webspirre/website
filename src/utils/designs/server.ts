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
    .schema("webspirre_admin")
    .from("website")
    .select()
    // .match({ uid: id })
    .eq("uid", id)
    .single();
  if (error) console.error("Error fetching designs:", error);
  else return data;
};

// FETCH DESIGNS BASED ON PAGE SIZE
export const fetchDesignsPage = async (page: number, pageSize: number) => {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .schema("webspirre_admin")
    .from("website")
    .select("*")
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    throw error;
  }

  return data;
};
