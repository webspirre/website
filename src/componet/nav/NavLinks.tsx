// NavLinks.tsx
import React from "react";
import Link from "next/link";

interface NavLinksProps {
  status: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ status }) => {
  return (
    <ul className="flex space-x- sm:space-x-8 items-center">
      <li>
        <Link href="/price" className="hidden sm:flex text-[black] font-medium">
          Pricing
        </Link>
      </li>
      <li>
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
      <li>
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
