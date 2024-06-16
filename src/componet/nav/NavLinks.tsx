// NavLinks.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { handleRequest } from "@/libs/auth-helpers/client";
import { getRedirectMethod } from "@/libs/auth-helpers/settings";

import { usePathname, useRouter } from "next/navigation";

interface NavLinksProps {
  status: string;
  user?: any;
}

const NavLinks: React.FC<NavLinksProps> = ({ user }) => {
  const router = useRouter();
  const pathname = usePathname();
  const redirectMethod = getRedirectMethod();
  return (
    <ul className="flex text-[14px] pt-2 sm:space-x-8 items-center">
      <li className="">
        <Link href="mailto:webspirre@gmail.com" className=" sm:flex text-[black] font-medium">
          Advertise
        </Link>
      </li>
      <li className="hidden">
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
          Upgrade now
        </Link>
      </li>
      <li className="hidden sm:block">
        {!user ? (
          <div className=" sm:flex">
            <Link href="/auth/login" className=" text-[black]  font-medium">
              Log in
            </Link>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className=" sm:flex text-[black]  font-medium"
          ></Link>
        )}
      </li>

      {!user && (
        <li className="">
          <Link
            href="/auth/register"
            className=" bg-black p-2 px-4 text-white text-[12px] rounded-[10px] border flex items-center gap-2 border-[#BBBBBB] "
          >
            Signup
          </Link>{" "}
        </li>
      )}

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
