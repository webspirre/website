"use client";
// Browse.js
import React from "react";
import Tabs from "./Tabs";
import data from "./data";
import { Carter_One } from "next/font/google";
import Image from "next/image";
import { fetchDesigns } from "@/utils/designs/server";
import useDesign from "@/hooks/useDesign";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Browse = ({ user, handleAuthModal, designs }) => {
  const { design } = useDesign();

  const tabs = [
    { value: "all", label: "All" },
    { value: "ai", label: "AI" },
    { value: "fintech", label: "Fintech" },
    { value: "marketplace", label: "Marketplace" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "crypto-web3", label: "Crypto & Web 3" },
    { value: "software-saas", label: "Software & SaaS" },
    { value: "travel-hospitality", label: "Travel & Hospitality" },
    { value: "agency-corporate", label: "Agency & Corporate" },
  ];

  return (
    <div className="flex justify-center w-full items-center ">
      <div className=" p-4 pt- sm:mx-2 mb-[0px] sm:max-w-[1320px] mx-auto w-full ">
        <div className={carterOne.className}>
          <p className="text-lg sm:text-[24px]">Browse design</p>
        </div>

        <div className="mt-[0px]">
          <div>
            <Tabs
              tabs={tabs}
              data={data}
              user={user}
              handleAuthModal={handleAuthModal}
              designs={designs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
