"use client";

import Navbar from "@/componet/nav/Navbar2";
import Navbar1 from "@/componet/nav/Navbar";
import React, { useState } from "react";
import User from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";

async function page() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);
  return (
    <>
      <DeleteProfileModal open={toogleModal} toogleModal={handleToggle} />
      <div>
        <Navbar />
        <User />
      </div>
    </>
  );
}

export default page;
