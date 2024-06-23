"use client";

import Navbar from "@/componet/nav/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";
  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "490px", // Set the desired height
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="flex flex-col items-center justify-center w-full"
      >
        <Image
          height={600}
          width={600}
          src="https://res.cloudinary.com/dwqantex4/image/upload/v1716472524/283328-P6KJ3W-567_1_ygphxb.png"
          alt="rice"
          className="px-4"
        />
        <Image
          height={200}
          width={500}
          src="https://res.cloudinary.com/dwqantex4/image/upload/v1716472523/hero_H1_and_vector_r6n8qn.png"
          alt="rice"
          className="px-4"
        />

        <h1 className="text-base sm:text-[16px] px-4 sm:w-[600px] pt-4 text-center">
          Sorry, the page you requested could not be found on our server. Please
          try again.
        </h1>
        <div className="flex items-center justify-center gap-4 px-4 pt-6">
          <Link
            href="/"
            className="bg-black py-4 px-4 sm:py-4 sm:px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px]"
          >
            Back To Home
          </Link>
          <div
            // href="/"
            className="bg-white flex items-center gap-2 py-4 px-4 sm:py-4 sm:px-8 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px] cursor-pointer"
          >
            Report This Problem
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
