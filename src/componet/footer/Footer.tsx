"use client";

import Link from 'next/link';
import React from 'react';
import { Carter_One } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";


const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


function Footer() {

    const pathname = usePathname();


  const hideDivRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgotpassword",
    "/auth/forgotpassword/newpassword",
    "/auth/forgotpassword/verify",
  ];
  const shouldHideDiv = hideDivRoutes.includes(pathname);

  return (
    <div className={`relative mt-[600px] sm:mt-[400px] ${shouldHideDiv ? "hidden" : ""}`}>
      <div className="bg-black absolute bottom-0 text-white font-medium flex justify-center w-full text-[14px] mt-[50px]">
        <div className="px-4 sm:px-[50px] max-w-[1350px] w-full py-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-6">
            <div className="tex col-span-2">
              <Link href="/" className="py-4">
                <img
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718365011/utilities/webspirre/logo_gqvk86.svg"
                  alt=""
                />
              </Link>

              <p className="pt-[16px] py-4">
                Find real web design inspiration. Faster.
              </p>
            </div>

            <div className="col-span-4">
              {/* <div className={carterOne.className}> Browse design</div> */}
              {/* <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718371221/utilities/webspirre/Links_r3f0ml.svg"
              alt=""
              className='w-[700px]'
            /> */}
              <div className="sm:grid grid-cols-1 sm:grid-cols-5 mb-[50px]">
                <div className="flex flex-col gap-6 col-span-1">
                  <Link href="/terms" className="py-4">
                    Terms
                  </Link>
                  <Link href="/" className="hidden">
                    Pricing
                  </Link>
                </div>
                <div className="flex flex-col gap-6 col-span-1">
                  <Link href="/support" className="py-4">
                    Support
                  </Link>
                  <Link href="/" className="hidden">
                    Updates
                  </Link>
                </div>
                <div className="flex flex-col gap-6 col-span-1">
                  <Link href="/policy" className="py-4">
                    Privacy Policy
                  </Link>
                  {/* <Link href="mailto:webspirre@gmail.com" className="">
              Advertise
            </Link> */}
                </div>
                <div className="flex flex-col gap-6 col-span-1">
                  <Link href="mailto:webspirre@gmail.com" className="py-4">
                    Advertise
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between items-start">
            <p className="text-[12px] italic py-4">
              Webspirre does not own these screenshots. They are <br />{" "}
              copyrights of the respective websites mentioned.
            </p>

            <div className="flex items-center gap-2">
              <p>Powered by:</p>
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718365010/utilities/webspirre/Simplification_cjg5eu.svg"
                alt=""
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer
