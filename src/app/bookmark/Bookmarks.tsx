import Image from 'next/image';
import React from 'react'

function Bookmarks() {
  return (
    <div className='px-4 mt-20'>
      <Image
        height={20}
        width={200}
        src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707434846/utilities/category_labels_y3mon1.svg"
        alt="rice"
        className=""
      />
      <div className="flex items-center ">
        <div className="flex items-center w-[83%] bg-white border border-[#BBBBBB] rounded-full py-3 px-[50px]">
          <Image
            height={20}
            width={20}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
            alt="rice"
            className="rounded-lg"
          />
          <input
            type="text"
            placeholder="Search for a website or category..."
            className="focus:outline-none focus:border-black pl-2 w-full"
          />
        </div>

        <div
          className="h-10 w-[1px] bg-[#989898] mx-6"
        ></div>
        <div className="hover: bg-black p-3 px-4 text-white rounded-full border flex items-center gap-2 border-[#BBBBBB] ">
          <Image
            height={20}
            width={30}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707435189/utilities/Frame_50_1_qpoaav.svg"
            alt="rice"
            className=""
          />
          New Bookmark{" "}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks
