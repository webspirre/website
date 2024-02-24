"use client";
// Browse.js
import React from "react";
import Tabs from "./Tabs";
import data from "./data";
import Image from "next/image";

const Browse = () => {
  const tabs = [
    { label: "All" },
    { label: "Software & SaaS" },
    { label: "AI" },
    { label: "Fintech" },
    { label: "Agency & Corporate" },
    { label: "E-Commerce" },
    { label: "Crypto & Web3" },
    { label: "Travel & Hospitality" },
  ];

  return (
    <div className="p-4 pt-8 max-w-screen-xl mx-2 mb-2">
      <Image
        src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705960658/utilities/Browse_designs_kubbae.svg"
        height={673}
        width={200}
        alt="design"
      />

      <div className="mt-2">
        <div>
          <Tabs tabs={tabs} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
