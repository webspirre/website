import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { handleRequest } from "@/libs/auth-helpers/client";
import { SignOut } from "@/libs/auth-helpers/server";
import { getRedirectMethod } from "@/libs/auth-helpers/settings";
import { usePathname, useRouter } from "next/navigation";

interface MoreNavLinksProps {
  showMoreNavLinks: boolean;
  toggleMoreNavLinks: () => void;
  user?: any;
}

const MoreNavLinks = forwardRef<HTMLDivElement, MoreNavLinksProps>(
  ({ showMoreNavLinks, toggleMoreNavLinks, user }, ref) => {
    const router = useRouter();
    const pathname = usePathname();
    const redirectMethod = getRedirectMethod();

    const handleSignOut = async (e: React.FormEvent<HTMLFormElement>) => {
      await handleRequest(e, SignOut, router);
    };

    return (
      <div className="relative text-[12px]" ref={ref}>
        <div className="hidden">
          <a
            href="#"
            className="p-2 border flex flex-row gap-2 rounded-full"
            onClick={toggleMoreNavLinks}
          >
            <Image
              height={20}
              width={40}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432454/utilities/profile_image_b4sbia.svg"
              alt="rice"
              className="z-10"
            />
            <Image
              height={20}
              width={35}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432726/utilities/hamburger_icon_mlednc.svg"
              alt="rice"
              className=""
            />
          </a>
        </div>

        <a href="#" className="hover:underline hidde">
          <Image
            height={20}
            width={36}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705727048/utilities/menu_rdtahr.svg"
            alt="Menu Icon"
            className=" pt-3"
            onClick={toggleMoreNavLinks}
          />
        </a>

        {/* More nav links pop-up */}
        {showMoreNavLinks && (
          <div className="absolute top-4 text-[12px] -right-[10px] mt-6 bg-white z-[999] w-[150px] rounded-md shadow-md">
            {/* Your additional navigation links here */}
            <div className="absolute text-[12px] -right-[10px] mt-6 bg-white border z-10 w-[200px] rounded-md shadow-md">
              <Link href="/bookmark" className="hidden text-[black] mb-2 ">
                <div className=" border-b pb-4 items-center pt-4">
                  <div className="flex items-center gap-2 px-4">
                    <Image
                      height={20}
                      width={15}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388441/utilities/Intersect_1_zn8u9a.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold">Bookmark</p>
                  </div>
                </div>
              </Link>
              <Link href="/profile" className="block text-[black] mb-4 ">
                <div className="flex gap-2 px-4 items-center pt-2">
                  <Image
                    height={20}
                    width={15}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388442/utilities/Vector_4_orgh9u.svg"
                    alt="rice"
                    className=""
                  />
                  <p className="font-bold ">Profile</p>
                </div>
              </Link>
              <Link
                href="/notifications"
                className="block text-[black] mb-4 hover:"
              >
                <div className="flex gap-2 px-4 items-center pt-2">
                  <Image
                    height={20}
                    width={15}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707389050/utilities/bell_icon_e0cutg.svg"
                    alt="rice"
                    className=""
                  />
                  <p className="font-bold ">Notifications</p>
                </div>
              </Link>
              <Link
                href="/notifications"
                className=" hidden text-[black] mb-4 hover:"
              >
                <div className="flex items-center gap-2 px-4 pt-2">
                  <Image
                    height={20}
                    width={15}
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
                  <p className="">Terms</p>
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
                  <p className=""> Privacy Policy</p>
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
                  <p className="">Support</p>
                  <Image
                    height={20}
                    width={10}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                    alt="rice"
                    className=""
                  />
                </div>
              </Link>
              {!user ? (
                <Link href="/auth/login" className="block text-[black] hover:">
                  <div className="flex gap-2 border-t-2  py-2 px-4 mb-2">
                    <p className="  text-black font-bold sm:hidden">Log In</p>
                  </div>
                </Link>
              ) : (
                <form onSubmit={handleSignOut}>
                  <input type="hidden" name="pathName" value={pathname} />
                  <button className="block text-[black] hover:">
                    <p className="flex gap-2 border-t-2  py-2 px-4 mb-2">
                      <span className=" text-red-600 font-bold">Log Out</span>
                    </p>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MoreNavLinks.displayName = "MoreNavLinks";

export default MoreNavLinks;
