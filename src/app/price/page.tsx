"use client"

import Navbar1 from '@/componet/nav/Navbar1'

import React from 'react'
import Top from './Top'
import Bill from './Bill'
import { useSession, signOut } from "next-auth/react";
import Navbar from '@/componet/nav/Navbar'



function page() {
      const { status } = useSession();

  return (
    <div className="mb-20">
      {status === "authenticated" ? (
        <>
          <Navbar1 />
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}{" "}
      <Top />
      <Bill />
    </div>
  );
}

export default page
