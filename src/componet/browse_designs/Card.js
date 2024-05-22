import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  id,
  name,
  category,
  imageUrl,
  mobileImageUrlss,
  logoUrl,
  description,
  deviceFilter,
}) => {
  const [showMorePopup, setShowMorePopup] = useState(false);
  const [showBookmarkPopup, setShowBookmarkPopup] = useState(false);

  const handleMoreButtonClick = () => {
    setShowMorePopup(!showMorePopup);
    // Close the bookmark popup if open
    setShowBookmarkPopup(false);
  };

  const handleBookmarkButtonClick = () => {
    setShowBookmarkPopup(!showBookmarkPopup);
    // Close the more popup if open
    setShowMorePopup(false);
  };

  return (
    <div className="bg-white rounded-md relative">
      <Link href={`/detail/${id}`} passHref className="bg-white rounded-md ">
        <div className=" bg-[#F0F0F0] p-4 rounded-md ">
          <img
            src={deviceFilter === "Mobile" ? mobileImageUrlss : imageUrl}
            alt={name}
            className="mb-2 rounded-md"
          />
        </div>
      </Link>
      <div className="flex py-8 justify-between items-start">
        <div className="flex items-start mt-2 gap-2">
          <Link href={`/detail/${id}`} passHref className="bg-white rounded-md">
            {logoUrl && (
              <div className="">
                <img
                  src={logoUrl}
                  alt={`${name} Logo`}
                  className="sm:h-[24px] sm:w-[25px]"
                />
              </div>
            )}
          </Link>

          <div className="pr-[40px]"> 
            <p className="text-[12px] mb-2 font-bold">{name}</p>
            {description && (
              <p className="text-gray-700 text-[11px] ">{description}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {/* save to bookmark button */}
          <button onClick={handleBookmarkButtonClick}>
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706045803/utilities/Frame_32_l7gjxl.svg"
              height={50}
              width={30}
            />
          </button>

          {/* more button */}
          <button onClick={handleMoreButtonClick}>
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706045803/utilities/Frame_34_ybkht7.svg"
              height={50}
              width={30}
            />
          </button>
        </div>
      </div>

      {/* More Popup */}
      {showMorePopup && (
        <div className="absolute right-0 bottom-20 text-[14px] font-medium bg-white rounded-lg p-4 shadow-md">
          <div className="flex gap-2 mb-4">
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/Vector_2_eu5cas.svg"
              alt="rice"
              className="rounded-lg"
            />
            <p>Copy to paste in Figma</p>
          </div>
          <div className="flex gap-2">
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/download_icon_tsds6w.svg"
              alt="rice"
              className="rounded-lg"
            />
            <p>Download screenshot</p>
          </div>
        </div>
      )}

      {/* Bookmark Popup */}
      {showBookmarkPopup && (
        <div className="absolute right-10 bottom-20 text-[14px] font-medium bg-white rounded-md shadow-md">
          {/* Content for bookmark popup */}
          {/* Example options: */}
          {/* <input type="text" placeholder="Search bookmark" /> */}
          <div className="flex items-center my-2 w-[220px]  bg-[#EDEDED] mx-2 border-[#BBBBBB] rounded-lg py-2 px-[20px]">
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
              alt="rice"
              className="rounded-lg"
            />
            <input
              type="text"
              placeholder="Search your bookmarks"
              className="focus:outline-none focus:border-black pl-2 w-full bg-[#EDEDED]"
            />
          </div>
          <div className="w-full h-[1px] bg-[#D2D2D2] mb-2"></div>
          <div className="flex px-2 flex-row justify-between items-center mb-2">
            <p> Create New</p>
            <Image
              height={25}
              width={25}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706134118/utilities/Frame_50_ezbtot.svg"
              alt="rice"
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 px-2">Bookmark 1</p>
          <p className="mb-2 px-2">Bookmark 2</p>
          <p className="mb-2 px-2">Bookmark 3</p>
        </div>
      )}
    </div>
  );
};

export default Card;
