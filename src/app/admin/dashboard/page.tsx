import Image from "next/image";
import Link from "next/link";
import React from "react";
import Uploade from "./upload";

function page() {
  return (
    <div className=" ">
      <div className="flex items-center border-b">
        <div className="flex w-[300px] pl-10   bg-white h-100px">
          <Link href="/">
            <Image
              height={60}
              width={150}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
              alt="rice"
              className="rounded-lg"
            />
          </Link>
        </div>
        {/* <div className="w-10 bg-[#ececec] h-full flex">.</div> */}
        <div className="flex justify-between bg-[#ececec] px-4  items-center w-full border-b  border-[#BBBBBB] h-[100px]">
          <p className="text-[32px] font-bold">Upload</p>
          <div className="flex">
            {" "}
            <div className="flex justify-end">
              <div className="p-2  flex flex-row gap-2 rounded-full">
                <Image
                  height={20}
                  width={40}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432454/utilities/profile_image_b4sbia.svg"
                  alt="rice"
                  className="z-10"
                />
                <div className="text-[12px] pr-[50px]">
                  <p>Joshua Ogah</p>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className=" w-[300px] pl-10  ">
          <Link href="/" className="flex gap-4 text-[18px] pt-4">
            <Image
              height={60}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1708059974/utilities/Laptop_Upload_vzergq.svg"
              alt="rice"
              className="rounded-lg"
            />
            Upload
          </Link>
        </div>
        <div className=" flex w-full pt-[45px] bg-[#ececec]">
          <Uploade />
        </div>
      </div>
    </div>
  );
}

export default page;
