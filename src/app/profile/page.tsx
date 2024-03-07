"use client"

import Navbar from '@/componet/nav/Navbar2'
import Navbar1 from "@/componet/nav/Navbar";
import React from 'react'
import User from './user'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";





async function page() {
      const { status } = useSession();

   const session = await getServerSession(authOptions);
   console.log("session", session);
  //  if (!session) {
  //    redirect("/auth/login");
  //  }
  return (
    <div>
      <Navbar />
      <User />
    </div>
  )
}

export default page
