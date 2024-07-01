"use client";

import React, { useState } from "react";
import Form from "./form";
import Animation from "./animation";
import SignUpModal from "@/componet/modals/SignUpModal";
import { EmailProvider } from "@/context/SignupProvider";
import SignupLayout from "@/componet/layouts/SignupLayout";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpenModal = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <EmailProvider>
        <SignupLayout />
      </EmailProvider>
    </>
  );
}

export default Page;
