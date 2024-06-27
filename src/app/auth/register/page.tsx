"use client";

import React, { useState } from "react";
import Form from "./form";
import Animation from "./animation";
import SignUpModal from "@/componet/modals/SignUpModal";

function Page() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Content for the first column */}
      <div className="bg-white col-span-1 pt-10 px-4 ">
        <Form onOpenModal={handleOpenModal} />
      </div>

      {/* Content for the second column */}
      <div className="bg-white px-4 hidden sm:block">
        <Animation />
      </div>

      <SignUpModal open={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Page;
