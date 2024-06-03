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
    <div className="flex justify-center w-full items-center ">
      <div className=" p-4 pt-8 sm:mx-2 mb-[0px] sm:max-w-[1320px] mx-auto w-full ">
        <Image
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705960658/utilities/Browse_designs_kubbae.svg"
          height={673}
          width={140}
          alt="design"
        />

        <div className="mt-[0px]">
          <div>
            <Tabs tabs={tabs} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
