"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carter_One } from "next/font/google";
import Link from "next/link";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Bill() {
  const [isMonthly, setIsMonthly] = useState(true); // State to track billing frequency

  return (
    <div className="justify-center items-center flex text-[12px] flex-col ">
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex col-span-1 flex-col justify-center items-center">
          {" "}
          <div className="flex bg-[#F1F0EE] p-2 rounded-full items-center space-x-4 ">
            <div
              className={`cursor-pointer ${
                isMonthly
                  ? "bg-white rounded-full shadow-lg p-2 px-6"
                  : "p-2 pl-6 "
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </div>
            <div
              className={`cursor-pointer ${
                !isMonthly
                  ? "bg-white rounded-full shadow-md p-2 px-6"
                  : "p-2 pr-6"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly
            </div>
          </div>
          <div className="bg-black p-8 sm:w-[500px] text-[14px] rounded-[20px] mt-8 ">
            <div className="flex justify-center items-center flex-col">
              {isMonthly ? (
                /* Monthly Fee */
                <>
                  <h1
                    className={` ${carterOne.className} text-white text-[17px] sm:text-[60px]`}
                  >
                    $6<span className="sm:text-[32px]">/month </span>
                  </h1>

                  <p className="text-white my-4">Billed monthly</p>
                </>
              ) : (
                /* Yearly Fee */
                <>
                  <h1
                    className={` ${carterOne.className} text-white text-[17px] sm:text-[60px]`}
                  >
                    $60<span className="sm:text-[32px]">/month </span>
                  </h1>
                  <p className="text-white my-4">Billed yearly</p>
                </>
              )}
            </div>
            <div className="flex justify-center">
              <Link
                href="/checkout"
                className="text-black  rounded-lg p-4 bg-white text-[14px] text-center font-bold w-full"
              >
                Get started now
              </Link>
            </div>

            <div className="flex gap-4 mt-10 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">Unlimited access</p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">
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
              <p className="font-medium text-white ">Export to Figma</p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">Make moodboards</p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">
                Priority access to new features
              </p>
            </div>
          </div>
        </div>
        <div className="flex col-span-1 flex-col justify-center items-center">
          <div className="flex bg-[#F1F0EE] p-2 rounded-full items-center mt-20 space-x-4 ">
            <div
              className="bg-white rounded-full shadow-lg p-2 px-6"
              onClick={() => setIsMonthly(true)}
            >
              Lifetime payment
            </div>
          </div>

          <div className="bg-black p-8 sm:w-[500px] text-[14px]  rounded-[20px] mt-8 ">
            <div className="flex justify-center items-center flex-col">
              <h1
                className={` ${carterOne.className} text-white text-[17px] sm:text-[60px]`}
              >
                $300
              </h1>
              <p className="text-white my-4">One-time payment </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/checkout"
                className="text-black  rounded-lg p-4 bg-white text-center font-bold w-full"
              >
                Get started now
              </Link>
            </div>

            <div className="flex gap-4 mt-10 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">
                Lifetime Unlimited access
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
              <p className="font-medium text-white ">
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
              <p className="font-medium text-white ">Export to Figma</p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">Make moodboards</p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white">Ad-free experience </p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707425556/utilities/Frame_57_ie6uix.svg"
                alt="left"
                className=""
              />
              <p className="font-medium text-white ">
                Priority access to new features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
