import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  id,
  name,
  category,
  deskstopImageUrl,
  mobileImageUrl,
  logoUrl,
  description,
  deviceFilter,
  showMorePopupId,
  setShowMorePopupId,
  showBookmarkPopupId,
  setShowBookmarkPopupId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
    const [copied, setCopied] = useState(false);


  const handleMoreButtonClick = (e) => {
    e.stopPropagation();
    setShowMorePopupId((prev) => (prev === id ? null : id));
    setShowBookmarkPopupId(null);
  };

  const handleBookmarkButtonClick = (e) => {
    e.stopPropagation();
    setShowBookmarkPopupId((prev) => (prev === id ? null : id));
    setShowMorePopupId(null);
  };

  const handleCopyToClipboard = async () => {
    try {
      const response = await fetch(
        deviceFilter === "Mobile" ? mobileImageUrl : deskstopImageUrl
      );
      const blob = await response.blob();
      const item = new ClipboardItem({ [blob.type]: blob });
      await navigator.clipboard.write([item]);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Failed to copy image: ", err);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = deviceFilter === "Mobile" ? mobileImageUrl : deskstopImageUrl;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-md relative">
      <Link href={`/detail/${id}`} passHref className="bg-white rounded-md">
        <div
          className={`h-[400px] hover:shadow-xl hover-bounce overflow-hidden bg-[#F0F0F0] p-2 rounded-[20px] ${
            isHovered ? "scrollable" : isHoveredBack ? "scrollable-leave" : ""
          }`}
          onMouseEnter={() => {
            setIsHovered(true);
            setIsHoveredBack(false);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsHoveredBack(true);
          }}
        >
          <img
            src={deviceFilter === "Mobile" ? mobileImageUrl : deskstopImageUrl}
            alt={name}
            className="mb-2 rounded-[20px]"
          />
        </div>
      </Link>
      <div className="flex pt-6 pb-4 justify-between items-start">
        <div className="flex items-start mt- gap-2">
          <Link href={`/detail/${id}`} passHref className="bg-white rounded-md">
            {logoUrl && (
              <div className="">
                <img
                  src={logoUrl}
                  alt={`${name} Logo`}
                  className="sm:h-[30px] sm:w-[30px]"
                />
              </div>
            )}
          </Link>

          <div className="pr-[40px]">
            <p className="text-[12px] mb- font-bold">{name}</p>
            {description && (
              <p className="text-gray-700 text-[11px] ">{description}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {/* save to bookmark button */}
          {/* <button
            className="bookmark-button"
            onClick={handleBookmarkButtonClick}
          >
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706045803/utilities/Frame_32_l7gjxl.svg"
              height={50}
              width={30}
              alt="img"
            />
          </button> */}

          {/* more button */}
          <button
            className="more-button hover:scale-110 transition-transform duration-300"
            onClick={handleMoreButtonClick}
          >
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706045803/utilities/Frame_34_ybkht7.svg"
              height={50}
              width={30}
              alt="img"
            />
          </button>
        </div>
      </div>

      {/* MENU Popup */}
      {showMorePopupId === id && (
        <div className="absolute right-0 bottom-14 text-[12px] bg-white rounded-lg p-4 shadow-md popup">
          <button
            className="flex gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            onClick={handleCopyToClipboard}
          >
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/Vector_2_eu5cas.svg"
              alt="copy"
              className=""
            />
            <p>{copied ? "Copied to clipboard" : "Copy to clipboard"}</p>
          </button>
          <button
            className="flex gap-2 hover:scale-105 transition-transform duration-300"
            onClick={handleDownloadImage}
          >
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/download_icon_tsds6w.svg"
              alt="download"
              className=""
            />
            <p>Download screenshot</p>
          </button>
        </div>
      )}

      {/* Bookmark Popup */}
      {/* {showBookmarkPopupId === id && (
        <div className="absolute right-10 bottom-20 text-[12px] bg-white rounded-md shadow-md popup">
  
          <div className="flex items-center my-2 w-[220px] bg-[#EDEDED] mx-2 border-[#BBBBBB] rounded-lg py-2 px-[20px]">
            <Image
              height={15}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
              alt="search"
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
            <p>Create New</p>
            <Image
              height={25}
              width={25}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706134118/utilities/Frame_50_ezbtot.svg"
              alt="create new"
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 px-2">Bookmark 1</p>
          <p className="mb-2 px-2">Bookmark 2</p>
          <p className="mb-2 px-2">Bookmark 3</p>
        </div>
      )} */}
    </div>
  );
};

export default Card;
