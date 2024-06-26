"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDesigns } from "@/hooks/useDesigns";
import LazyImage from "./LazyImage";

const Card = ({
  id,
  name,
  category,
  deskstopImageUrl,
  mobileImageUrl,
  logoUrl,
  description,
  deviceFilter,
  uid,
  desktopFpURL,
  mobileFpURL,
  shortDescription,
  logoImageURL,
  showMorePopupId,
  setShowMorePopupId,
  showBookmarkPopupId,
  setShowBookmarkPopupId,
  user,
  handleAuthModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleLoginNavigate = () => {
    // Navigate to the /about page
    router.push("/auth/login");
  };

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
      const imageUrl = deviceFilter === "Mobile" ? mobileFpURL : desktopFpURL;
      console.log("Fetching image from URL:", imageUrl);

      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const item = new ClipboardItem({ [blob.type]: blob });
      await navigator.clipboard.write([item]);
      setCopied(true);
      toast.success("Copied Successfully");
      console.log("Image copied to clipboard");

      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Failed to copy image:", err);
      toast.error("error copying image");
    }
  };

  const handleDownloadImage = async () => {
    try {
      const imageUrl = deviceFilter === "Mobile" ? mobileFpURL : desktopFpURL;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = name || "download"; // Ensure a default name if name is undefined
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("screenshot downloaded successfully");
    } catch (err) {
      console.error("Failed to download image: ", err);
      toast.error("Error downloading screenshot", { duration: 2500 });
    }
  };

const handleContextMenu = (event) => {
  event.preventDefault();
  };
  
  return (
    <>
      {/* <div>
        {data &&
          data.pages.flatMap((page) =>
            page.map((design) => (
              <LazyImage
                key={design.uid}
                src={design.desktopFpURL}
                alt={design.name}
              />
            ))
          )}
        <LazyImage key={uid} src={desktopFpURL} alt={name} />
        {isFetchingNextPage && <div>Loading...</div>}
        <button
          onClick={loadMore}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load More
        </button>
      </div> */}
      <div className="bg-white rounded-md relative">
        <Link href={`/detail/${uid}`} passHref className="bg-white rounded-md">
          {/* <LazyImage key={uid} src={desktopFpURL} alt={name} /> */}
          <div
            className={`hover:shadow-xl hover-bounce overflow-hidden bg-[#F0F0F0]   p-1 rounded-[20px] ${
              isHovered ? "scrollable" : isHoveredBack ? "scrollable-leave" : ""
            } ${
              deviceFilter === "Mobile"
                ? "h-[500px] transition transform duration-500 ease-in-out"
                : "h-[400px] transition transform duration-500 ease-in-out"
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
            {desktopFpURL ? (
              <LazyImage
                key={uid}
                src={deviceFilter === "Mobile" ? mobileFpURL : desktopFpURL}
                alt={name}
                onContextMenu={handleContextMenu}
              />
            ) : (
              <div className="h-[507px] w-full bg-[#F5F5F5] p-2 rounded-[24px]">
                <div className="h-full w-full bg-[#F0F0F0] rounded-[24px] pulse-light-dark"></div>
              </div>
            )}
          </div>
        </Link>
        <div className="flex pt-6 pb-4 justify-between items-start">
          <div className="flex items-start gap-2">
            <Link
              href={`/detail/${uid}`}
              passHref
              className="bg-white rounded-md border-[0.5px]p-1  h-[34px] w-[34px] flex justify-center items-center"
            >
              {logoImageURL ? (
                <div>
                  <img
                    src={logoImageURL}
                    alt={`${name} Logo`}
                    className="sm:h-[34px] sm:w-[34px] rounded-[12px] no-right-click"
                    onContextMenu={handleContextMenu}
                    
                  />
                </div>
              ) : (
                <div className="bg-[#F0F0F0] rounded-[10px] h-[37px] w-[37px]"></div>
              )}
            </Link>

            <div className="pr-[40px]  w-[160px]">
              <p className="text-[12px] mb- font-bold">{name}</p>
              {shortDescription ? (
                <p className="text-gray-700 text-[11px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {shortDescription}
                </p>
              ) : (
                <div className="bg-[#] rounded-[10px] h-[37px] w-[200px] flex flex-col gap-1">
                  <div className="bg-[#F0F0F0] rounded-[4px] h-full w-[80px]"></div>
                  <div className="bg-[#F0F0F0] rounded-[4px] h-full w-[167px]"></div>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="more-button hover:scale-110 transition-transform duration-300"
              onClick={handleMoreButtonClick}
            >
              <Image
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706045803/utilities/Frame_34_ybkht7.svg"
                height={50}
                width={34}
                alt="img"
              />
            </button>
          </div>
        </div>

        {showMorePopupId === id && (
          <div className="absolute right-0 bottom-14 text-[12px] bg-white rounded-lg p-4 shadow-md popup">
            <button
              className="flex gap-2 mb-4 hover:scale-105 transition-transform duration-300"
              onClick={user ? handleCopyToClipboard : handleAuthModal}
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
              onClick={user ? handleDownloadImage : handleAuthModal}
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
      </div>
    </>
  );
};

export default Card;
