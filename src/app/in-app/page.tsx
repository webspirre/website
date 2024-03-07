"use client";

import Browse from "@/componet/browse_designs/Browse";
import Navbar1 from "@/componet/nav/Navbar1";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Navbar from "@/componet/nav/Navbar";

// async
function page() {
        const { status } = useSession();

  // const session = await getServerSession(authOptions);
  // console.log("session", session);
  // if (!session) {
  //   redirect("/auth/login");
  // }

  return (
    <div>
      {status === "authenticated" ? (
        <>
          <Navbar1 />
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}{" "}
      <div className="mt-20">
        <Browse />
      </div>
    </div>
  );
}

export default page;
