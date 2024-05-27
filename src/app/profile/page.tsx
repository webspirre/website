"use client";

import React, { useEffect, useState } from "react";
import User from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";
import useAuth from "@/hooks/useAuth";
import { createClient } from "@/libs/supabase/server";
import { SupabaseResponse } from "@/types/supabase_res";

function page() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);
  const { auth, setAuth } = useAuth();
  const supabase = createClient();

  // const getUser = async (): Promise<SupabaseResponse> => {
  //   const { data, error } = await supabase.auth.getUser();

  //   return {
  //     user: data?.user || null,
  //     error: error || null,
  //   };
  // };
  return (
    <>
      <DeleteProfileModal open={toogleModal} toogleModal={handleToggle} />
      <div>
        <User
          handleToggle={handleToggle}
          user={auth}
          // getUser={getUser}
          setAuth={setAuth}
        />
      </div>
    </>
  );
}

export default page;
