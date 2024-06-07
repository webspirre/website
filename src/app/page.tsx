"use client";

import Image from "next/image";
import Link from "next/link";
import Browse from "../componet/browse_designs/Browse";
import VideoModal from "@/componet/modals/VideoModal";
import { useState } from "react";
// import "flag-icon-css/css/flag-icon.min.css";

export default function Home() {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);

  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <main>
      <VideoModal toogleModal={handleToggle} open={toogleModal} />

      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "360px", // Set the desired height
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="flex flex-col items-center justify-center w-full "
      >
        <Image
          height={453}
          width={420}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705952595/utilities/hero_H1_and_vector_sy4fzl.svg"
          alt="rice"
          className="px-4"
        />

        <h1 className="sm:text-[14px] px-4 sm:w-[400px] pt-4 text-center">
          Skip the stressful part. Get real and practical web design inspiration
          from the internet&#39;s best designed and highest-converting websites.
        </h1>
        <div className="flex items-center justify-center gap-2 px-4 pt-6 sm:text-10px">
          <Link
            href="/"
            className="bg-black py-4 px-4 overflow-hidden hover:scale-110 transition-transform duration-300  sm:py-2 sm:px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[12px]"
          >
            Get started now
          </Link>
          <div
            // href="/"
            onClick={handleToggle}
            className="bg-white hover-black overflow-hidden hover:scale-100 transition-transform duration-300 flex items-center gap-1 py-4 px-4 sm:py-2 sm:px-4 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[12px] cursor-pointer"
          >
            <Image
              height={21}
              width={10}
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
