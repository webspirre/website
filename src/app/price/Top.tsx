import React from 'react';
import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Top() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-10 text-[12px]">
      <h1 className={` ${carterOne.className} text-[17px] sm:text-[24px]`}>
        Unlimited web design inspiration
      </h1>
      <p className="text-center text-[#6E6E6E] mt-4">
        Full freedom to discover some of the internet’s best designed <br />{" "}
        websites and find fresh inspiration for your next project.
      </p>
    </div>
  );
}

export default Top
