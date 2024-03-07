"use client"
import Navbar from "@/componet/nav/Navbar2";
import React from "react";
import Notification from "./notification";
import { useSession, signOut } from "next-auth/react";



function page() {
      const { status } = useSession();

  return (
    <div>
      <Navbar />
      <Notification />
    </div>
  );
}

export default page;
