import React from "react";
import Form from "./form";
import Animation from "./animation";

function ForgotPassword() {
  return (
    <div className=" items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white px-4">
        <Form />
      </div>

      <div className="bg-white px-4 hidden sm:block">
        <Animation />
      </div>
    </div>
  );
}

export default ForgotPassword;
