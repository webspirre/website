// MoreNavLinks.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MoreNavLinksProps {
  showMoreNavLinks: boolean;
}

const MoreNavLinks: React.FC<MoreNavLinksProps> = ({ showMoreNavLinks }) => {
  return (
    <div className="relative">
      <a href="#" className="hover:underline">
        <Image
          height={20}
          width={50}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705727048/utilities/menu_rdtahr.svg"
          alt="Menu Icon"
          className=""
        />
      </a>

      {/* More nav links pop-up */}
      {showMoreNavLinks && (
        <div className="absolute text-[12px] -right-[10px] mt-6  bg-white border z-10 w-[150px] rounded-md shadow-md">
          {/* Your additional navigation links here */}
        </div>
      )}
    </div>
  );
};

export default MoreNavLinks;
