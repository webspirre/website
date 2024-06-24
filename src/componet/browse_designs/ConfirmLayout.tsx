import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ConfirmLayoutProps {
  user: User | null;
}
const ConfirmLayout: React.FC<ConfirmLayoutProps> = ({ user }) => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "430px", // Set the desired height
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="max-w-screen-xl mx-auto items-center justify-center text-center flex-col flex gap-y-3 h-screen"
      >
        <h1 className="text-xl sm:text-5xl">
          Thanks for signing up on <span className="font-black">Webspirre</span>
        </h1>
        <p className="italic font-semibold text-sm sm:text-lg">
          Please, confirm the email sent to your email to proceed to loginin
        </p>

        <Link
          href="/auth/login"
          className=" hidden hover:scale-105 transition-transform duration-300 sm:block font-bold bg-black p-3.5 px-5 whitespace-nowrap text-white text-[12px] rounded-[12px] border fle items-center gap-2 border-[#BBBBBB] "
        >
          Login in
        </Link>
      </div>
    </>
  );
};

export default ConfirmLayout;
