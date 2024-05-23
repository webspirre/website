"use client";

import React, { useState } from "react";
import User from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";

function page() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);
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
