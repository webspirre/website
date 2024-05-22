"use client";

import Image from "next/image";
import Link from "next/link";
import Browse from "../componet/browse_designs/Browse";
import Navbar from "@/componet/nav/Navbar";
import Navbar1 from "@/componet/nav/Navbar1";
import VideoModal from "@/componet/modals/VideoModal";
import { useState } from "react";

export default function Home() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);

  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <main>
      <VideoModal toogleModal={handleToggle} open={toogleModal} />
      <>
        <Navbar />
      </>
      {/* <>
          <Navbar />
        </> */}
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "490px", // Set the desired height
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="flex flex-col items-center justify-center w-full "
      >
        <Image
          height={650}
          width={650}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705952595/utilities/hero_H1_and_vector_sy4fzl.svg"
          alt="rice"
          className="px-4"
        />

        <h1 className="sm:text-[24px] px-4 sm:w-[600px] pt-4 text-center">
          Skip the stressful part. Get real and practical web design inspiration
          from the internet&#39;s best designed and highest-converting websites.
        </h1>
        <div className="flex items-center justify-center gap-4 px-4 pt-6">
          <Link
            href="/"
            className="bg-black py-4 px-4 sm:py-4 sm:px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px]"
          >
            Get started now
          </Link>
          <div
            // href="/"
            onClick={handleToggle}
            className="bg-white flex items-center gap-2 py-4 px-4 sm:py-4 sm:px-8 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px] cursor-pointer"
          >
            <Image
              height={40}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715212239/utilities/play_icon_1_zueuon.svg"
              alt="rice"
              className=""
            />
            See how it works
          </div>
        </div>
      </div>
      <div className="">
        <Browse />
      </div>
    </main>
  );
}
