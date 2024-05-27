import React from "react";
import Navbar from "../nav/Navbar";
import { createClient } from "@/libs/supabase/server";
interface LayoutNavProps {
  children: React.ReactNode;
}
const LayoutNav: React.FC<LayoutNavProps> = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <div>
        <Navbar user={user} />
      </div>
    </>
  );
};

export default LayoutNav;
