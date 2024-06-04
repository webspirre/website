"use client";
// Browse.js
import React from "react";
import Tabs from "./Tabs";
import data from "./data";
import { Carter_One } from "next/font/google";
import Image from "next/image";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
        <div className={carterOne.className}>
          <p className="text-lg sm:text-[24px]">Browse design</p>
        </div>

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
