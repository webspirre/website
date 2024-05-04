"use client"

import Navbar1 from '@/componet/nav/Navbar1'

import React from 'react'
import Top from './Top'
import Bill from './Bill'
import Navbar from '@/componet/nav/Navbar'



function page() {

  return (
    <div className="mb-20">
        <>
          <Navbar1 />
        </>
        {/* <>
          <Navbar />
        </> */}
      <Top />
      <Bill />
    </div>
  );
}

export default page
