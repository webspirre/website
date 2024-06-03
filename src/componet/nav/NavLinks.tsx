// NavLinks.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinksProps {
  status: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ status }) => {
  return (
    <ul className="flex text-[14px] pt-2 sm:space-x-8 items-center">
      <li>
        <Link href="/price" className="hidden sm:flex text-[black] font-medium">
          Pricing
        </Link>
      </li>
      <li className="hidden sm:block">
        <Link
          href="/auth/register"
          className=" bg-black p-2 px-4 text-white text-[12px] rounded-[10px] border flex items-center gap-2 border-[#BBBBBB] "
        >
          <Image
            height={20}
            width={15}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707387992/utilities/Vector_3_drikcp.svg"
            alt="rice"
            className=""
          />
          Upgrade now{" "}
        </Link>
      </li>
      <li className="hidden">
        {status === "authenticated" ? (
          <div className="hidden sm:flex">
            <Link
              href="/auth/login"
              className="hover: text-[black]  font-medium"
            >
              Log out
            </Link>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="hidden sm:flex text-[black]  font-medium"
          >
            Log in
          </Link>
        )}
      </li>

      <li className="hidden">
        <div className=" bg-[#fdf1af] p-2 px-4 text-black font font-medium rounded-[10px] text-[14px]  flex items-center gap-2 border-[#BBBBBB] ">
          <Image
            height={20}
            width={14}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432146/utilities/Vector_8_pv7c0p.svg"
            alt="rice"
            className="z-10"
          />
          Pro plan{" "}
        </div>
      </li>

      <li className="hidden">
        <Link
          href="/auth/register"
          className="hidden sm:flex bg-black p-3 px-8 text-white rounded-[10px] border border-[#BBBBBB] "
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
