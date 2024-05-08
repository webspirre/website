"use client"

import Navbar from '@/componet/nav/Navbar2'
import Navbar1 from "@/componet/nav/Navbar";
import React from 'react'
import User from './user'


async function page() {
      
  return (
    <div>
      <Navbar />
      <User />
    </div>
  )
}

export default page
