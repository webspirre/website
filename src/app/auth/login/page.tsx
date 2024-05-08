import React from "react";
import Form from "./form";
import Animation from "./animation";


async function Page() {
   
  return (
    <div className=" items-center grid grid-cols-2 gap-4">
      <div className="bg-white px-4">
        <Form />
      </div>

      <div className="bg-white px-4">
        <Animation />
      </div>
    </div>
  );
}

export default Page;
