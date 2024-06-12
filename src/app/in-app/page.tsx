"use client";

import Browse from "@/componet/browse_designs/Browse";
import React from "react";

// async
function page() {
  return (
    <div>
      <div className="mt-20">
        <Browse user={null} handleAuthModal={() => {}} />
      </div>
    </div>
  );
}

export default page;
