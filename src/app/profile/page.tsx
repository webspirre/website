"use client";

import React, { useEffect, useState } from "react";
import User from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";

function page() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);

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
        <User handleToggle={handleToggle} />
      </div>
    </>
  );
}

export default page;
