"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Bill() {
  const [isMonthly, setIsMonthly] = useState(true); // State to track billing frequency

  return (
    <div className="justify-center items-center flex flex-col mt-8">
      <div className="flex bg-[#F1F0EE] p-2 rounded-full items-center space-x-4 ">
        <div
          className={`cursor-pointer ${
            isMonthly ? "bg-white rounded-full shadow-lg p-4 px-6" : "p-4 pl-6 "
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </div>
        <div
          className={`cursor-pointer ${
            !isMonthly ? "bg-white rounded-full shadow-md p-4 px-6" : "p-4 pr-6"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </div>
      </div>

      <div className="bg-black p-8 w-[500px] rounded-[20px] mt-8 ">
        <div className="flex justify-center items-center flex-col">
          {isMonthly ? (
            /* Monthly Fee */
            <>
              <h1
                className={` ${carterOne.className} text-[17px] sm:text-[24px]`}
              >
                Unlimited web design inspiration
              </h1>
              <Image
                height={20}
                width={200}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707424904/utilities/month_1_phnqcj.svg"
                alt="left"
                className=""
              />
              <p className="text-white my-4">Billed monthly</p>
            </>
          ) : (
            /* Yearly Fee */
            <>
              <Image
                height={20}
                width={200}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707424891/utilities/month_ghzscm.svg"
                alt="left"
                className=""
              />
              <p className="text-white my-4">Billed yearly</p>
            </>
          )}
        </div>

        <button className="text-black p-4 bg-white text-[20px] text-center font-bold w-full">
          Get started now
        </button>

        <div className="flex gap-4 mt-10 items-center">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
            alt="left"
            className=""
          />
          <p className="font-medium text-white text-[24px]">Unlimited access</p>
        </div>
        <div className="flex gap-4 mt-8 items-center">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
            alt="left"
            className=""
          />
          <p className="font-medium text-white text-[24px]">
            Bookmark your favorite screenshots
          </p>
        </div>
        <div className="flex gap-4 mt-8 items-center">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
            alt="left"
            className=""
          />
          <p className="font-medium text-white text-[24px]">Export to Figma</p>
        </div>
        <div className="flex gap-4 mt-8 items-center">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
            alt="left"
            className=""
          />
          <p className="font-medium text-white text-[24px]">Make moodboards</p>
        </div>
        <div className="flex gap-4 mt-8 items-center">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
            alt="left"
            className=""
          />
          <p className="font-medium text-white text-[24px]">
            Priority access to new features
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bill;
