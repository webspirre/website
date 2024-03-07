import React from "react";
import Form from "./form";
import Animation from "./animation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Page() {
   const session = await getServerSession(authOptions);
   console.log("session", session);
   if (session) {
     redirect("/auth/login");
   }
  return (
    <div className=" items-center grid grid-cols-2 gap-4">
      {/* Content for the first column */}
      <div className="bg-white px-4">
        <Form />
      </div>

      {/* Content for the second column */}
      <div className="bg-white px-4">
        <Animation />
      </div>
    </div>
  );
}

export default Page;
