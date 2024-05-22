// MoreNavLinks.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MoreNavLinksProps {
  showMoreNavLinks: boolean;
  toggleMoreNavLinks: () => void; // Define the toggleMoreNavLinks function
}

const MoreNavLinks: React.FC<MoreNavLinksProps> = ({
  showMoreNavLinks,
  toggleMoreNavLinks,
}) => {
  return (
    <div className="relative">
      <a href="#" className="hover:underline">
        <Image
          height={20}
          width={44}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705727048/utilities/menu_rdtahr.svg"
          alt="Menu Icon"
          className=" pt-2"
          onClick={toggleMoreNavLinks}
        />
      </a>

      {/* More nav links pop-up */}
      {showMoreNavLinks && (
        <div className="absolute top-4 text-[12px] -right-[10px] mt-6  bg-white  z-10 w-[150px] rounded-md shadow-md">
          {/* Your additional navigation links here */}
          <div className="absolute text-[12px] -right-[10px] mt-6  bg-white border z-10 w-[200px] rounded-md shadow-md">
            <Link href="/bookmark" className="block text-[black] mb-2 ">
              <div className=" border-b pb-4 items-center pt-4">
                <div className="flex items-center gap-2 px-4">
                  <Image
                    height={20}
                    width={25}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388441/utilities/Intersect_1_zn8u9a.svg"
                    alt="rice"
                    className=""
                  />
                  <p className="font-bold text-[14px]">Bookmark</p>
                </div>
              </div>
            </Link>
            <Link href="/profile" className="block text-[black] mb-4 ">
              <div className="flex gap-2 px-4 items-center pt-2">
                <Image
                  height={20}
                  width={25}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388442/utilities/Vector_4_orgh9u.svg"
                  alt="rice"
                  className=""
                />
                <p className="font-bold text-[14px]">Profile</p>
              </div>
            </Link>
            {/* <Link
                  href="/settings"
                  className="block text-[black] mb-4 hover:"
                >
                  <div className="flex gap-2 px-4 items-center pt-2">
                    <Image
                      height={20}
                      width={25}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388441/utilities/Vector_5_izymzc.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold text-[14px]">Settings</p>
                  </div>
                </Link> */}
            <Link
              href="/notifications  "
              className="block text-[black] mb-4 hover:"
            >
              <div className="flex gap-2 px-4 items-center pt-2">
                <Image
                  height={20}
                  width={25}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707389050/utilities/bell_icon_e0cutg.svg"
                  alt="rice"
                  className=""
                />
                <p className="font-bold text-[14px]">Notifications</p>
              </div>
            </Link>
            <Link
              href="/notifications"
              className="block text-[black] mb-4 hover:"
            >
              <div className="flex items-center gap-2 px-4 pt-2">
                <Image
                  height={20}
                  width={25}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058912/utilities/updates_icon_l9larw.svg"
                  alt="rice"
                  className=""
                />
                <p className="font-bold text-[14px]">Updates</p>
              </div>
            </Link>

            <Link
              href="/terms"
              className="block text-[black] border-t mb-4 hover:"
            >
              <div className="flex justify-between px-4 pt-4">
                <p className=" text-[14px]">Terms</p>
                <Image
                  height={20}
                  width={10}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                  alt="rice"
                  className=""
                />
              </div>
            </Link>
            <Link href="/policy" className="block mb-4 text-[black] hover:">
              <div className="flex justify-between px-4">
                <p className=" text-[14px]"> Privacy Policy</p>
                <Image
                  height={20}
                  width={10}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                  alt="rice"
                  className=""
                />
              </div>
            </Link>
            <Link href="/support" className="block text-[black] mb-4 hover:">
              <div className="flex justify-between px-4">
                <p className=" text-[14px]">Support</p>
                <Image
                  height={20}
                  width={10}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                  alt="rice"
                  className=""
                />
              </div>
            </Link>
            <Link href="#updates" className="block text-[black] hover:">
              <div className="flex gap-2 border-t-2  py-2 px-4 mb-2">
                <p className=" text-[14px] text-red-600 font-bold">Log Out</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreNavLinks;
