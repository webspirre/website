"use client"

import Navbar2 from '@/componet/nav/Navbar2'
import Navbar1 from "@/componet/nav/Navbar";
import React from 'react'
import { useSession, signOut } from "next-auth/react";


function page() {
      const { status } = useSession();

  return (
    <div>
      <Navbar2 />
    </div>
  )
}

export default page
