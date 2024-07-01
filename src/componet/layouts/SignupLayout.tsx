import Animation from "@/app/auth/register/animation";
import Form from "@/app/auth/register/form";
import useEmail from "@/hooks/useSignup";
import React from "react";

const SignupLayout = () => {
  const { handleOpenModal } = useEmail();
  return (
    <>
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Content for the first column */}
        <div className="bg-white col-span-1 pt-10 px-4 ">
          <Form onOpenModal={handleOpenModal} />
        </div>

        {/* Content for the second column */}
        <div className="bg-white px-4 hidden sm:block">
          <Animation />
        </div>
      </div>
    </>
  );
};

export default SignupLayout;
