"use client";

import Browse from "@/componet/browse_designs/Browse";
import Navbar1 from "@/componet/nav/Navbar1";
import React from "react";

import Navbar from "@/componet/nav/Navbar";

// async
function page() {
  return (
    <div>
      <>
        <Navbar1 />
      </>
      {/* <>
          <Navbar />
        </> */}
      <div className="mt-20">
        <Browse />
      </div>
    </div>
  );
}

export default page;
