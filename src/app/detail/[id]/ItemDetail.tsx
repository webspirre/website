"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import data from "../../../componet/browse_designs/data";
import cx from "classnames";
import BottomBar from "./BottomBar";

interface ItemDetailProps {
  id: number;
  onNext: () => void;
  onPrevious: () => void;
}

const ItemDetailContent: React.FC<{ websiteData: any; isTop?: boolean }> = ({
  websiteData,
  isTop,
}) => {
  return (
    <>
      {/* Detail Content */}
      <div
        className={cx(
          isTop
            ? "block md:hidden mb-10 p-3"
            : "hidden md:block sm:w-[400px]  p-4 border-[#F3F4F6] border-2 shadow-lg rounded-lg",
          "mt-0 xl:mt-8"
        )}
      >
        <div className="flex gap-4 mb-4 items-center">
          {/* website logo */}
          <Image
            height={20}
            width={44}
            src={websiteData.logoUrl}
            alt="rice"
            className="p-2 rounded-lg border border-[#F1F0EE]"
          />
          {/* website name */}
          <h1 className="font-bold ">{websiteData.name}</h1>
        </div>
        {/* website long description */}
        <p className="text-[12px] text-[#6E6E6E]">
          {websiteData.longDescription}
        </p>

        <div className="border-t border-gray my-4"></div>
        <div className="">
          <table className="w-full">
            {!isTop ? (
              <tbody>
                <tr className="text-[12px] text-[#6E6E6E]">
                  <td className="p-2 ">Category</td>
                  {/* website category */}
                  <td className="p-2">{websiteData.category}</td>
                </tr>
                <tr className="text-[12px] text-[#6E6E6E]">
                  <td className="p-2">Views</td>
                  {/* number of veiws */}
                  <td className="p-2">{websiteData.views}</td>
                </tr>
                <tr className="text-[12px] text-[#6E6E6E]">
                  <td className="p-2">Last updated</td>
                  {/* last updated */}
                  <td className="p-2">{websiteData.lastUpdated}</td>
                </tr>
              </tbody>
            ) : (
              <tbody className="flex space-x-1 text-[10px] text-[#6E6E6E] whitespace-nowrap overflow-x-scroll max-w-[350px]">
                <tr className="">
                  <td className="p-2 ">Category</td>
                  {/* website category */}
                </tr>
                <tr className="">
                  <td className="p-2 font-semibold">{websiteData.category}</td>
                </tr>
                <tr className="">
                  <td className="p-2">Last updated</td>
                  {/* last updated */}
                </tr>
                <tr className="">
                  <td className="p-2 font-semibold">
                    {websiteData.lastUpdated}
                  </td>
                </tr>
                <tr className="">
                  <td className="p-2">Views</td>
                  {/* number of veiws */}
                </tr>
                <tr className="">
                  <td className="p-2 font-semibold">{websiteData.views}</td>
                </tr>
              </tbody>
            )}

            {/*  */}
          </table>
        </div>

        <div className="border-t border-gray my-0 md:my-4"></div>
      </div>
    </>
  );
};

function ItemDetail({ id, onNext, onPrevious }: ItemDetailProps) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);
  const websiteData = data[id];

  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };

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

  const handleCopyToClipboard = async () => {
    try {
      const response = await fetch(
        isMobileView ? websiteData.mobileImageUrl : websiteData.deskstopImageUrl
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

 const handleDownloadImage = async () => {
   try {
     const imageUrl = isMobileView
       ? websiteData.mobileImageUrl
       : websiteData.deskstopImageUrl;
     const response = await fetch(imageUrl);
     const blob = await response.blob();
     const url = window.URL.createObjectURL(blob);
     const link = document.createElement("a");
     link.href = url;
     link.download = websiteData.name;
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
     window.URL.revokeObjectURL(url);
   } catch (err) {
     console.error("Failed to download image: ", err);
   }
 };

  return (
    <div className="">
      <div className="sm:mr-[]">
        {/* previous button, to move to the previous website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_dbhadp.svg"
          alt="left"
          className="fixed z-10 top-[50%] shadow-md rounded-full cursor-pointer w-12 sm:w-auto"
          onClick={handlePrevious}
        />
        {/* next button, to move to the next website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_1_ugfikx.svg"
          alt="right"
          className="fixed z-10 top-[50%] right-2 sm:right-20 shadow-md rounded-full cursor-pointer w-12 sm:w-auto"
          onClick={handleNext}
        />
      </div>
      {/* Detail Item Content */}
      <ItemDetailContent websiteData={websiteData} isTop={true} />{" "}
      <div className="w-fit bg-[#F1F0EE] p-1 md:p-2 mx-auto sm:ml-[80px] mb-8 shadow-md rounded-full">
        {/* Desktop and Mobile switch, to show the desktop or mobile image on the website image space*/}
        <div className="flex text-[12px] items-center justify-center space-x-4 ">
          <div
            className={`cursor-pointer ${
              !isMobileView
                ? "bg-white rounded-full shadow-lg p-2 px-6"
                : "p-2 pl-6"
            }`}
            onClick={() => setIsMobileView(false)}
          >
            Desktop
          </div>
          <div
            className={`cursor-pointer ${
              isMobileView
                ? "bg-white rounded-full shadow-md p-2 px-6"
                : "p-2 pr-6"
            }`}
            onClick={() => setIsMobileView(true)}
          >
            Mobile
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-full ml-2 md:ml-4 xl:ml-[80px] flex item-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          {/* First Column */}
          <div className={`col-span-4 md:col-span-3 mx-auto`}>
            {/* the website image */}
            <Image
              height={isMobileView ? 500 : 20}
              width={isMobileView ? 300 : 2000}
              src={
                isMobileView
                  ? data[id].mobileImageUrl
                  : data[id].deskstopImageUrl
              }
              alt={data[id].name}
              className="shadow-lg border-2 rounded-md"
            />
          </div>

          {/* Second Column */}
          <div className={`col-span-2 md:col-span-3 px-4`}>
            {/* Your content for the second column */}
            <div className="flex gap-4">
              <div
                className="p-4 flex items-center bg-[#F1F0EE] border border-[#94A3B8] rounded-lg cursor-pointer"
                onClick={handleMoreButtonClick}
              >
                {/* More Option button */}
                <Image
                  height={20}
                  width={15}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554697/utilities/Union_weecgj.svg"
                  alt="rice"
                  className=""
                />

                {showMorePopup && (
                  <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setShowBookmarkPopup(false)}
                      ></div>
                      <div
                        className="relative z-[999] sm:z-10 text-[14px] font-medium bg-white rounded-md shadow-md p-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className="flex gap-2 mb-4 cursor-pointer"
                          onClick={handleCopyToClipboard}
                        >
                          <Image
                            height={15}
                            width={15}
                            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/Vector_2_eu5cas.svg"
                            alt="rice"
                            className=""
                          />
                          <p>
                            {copied
                              ? "Copied to clipboard"
                              : "Copy to clipboard"}
                          </p>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={handleDownloadImage}
                        >
                          <Image
                            height={15}
                            width={15}
                            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706138678/utilities/download_icon_tsds6w.svg"
                            alt="rice"
                            className=""
                          />
                          <p>Download screenshot</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Website Link */}
              <Link href="/">
                <div className="py-2 px-4 gap-2 bg-[black] text-white flex items-center rounded-lg">
                  <p className="font-bold text-[12px]">Visit Site</p>
                  <Image
                    height={20}
                    width={15}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554673/utilities/arrow_up_1_hwov3p.svg"
                    alt="rice"
                    className=""
                  />
                </div>
              </Link>
            </div>

            {/* <BottomBar
              handleBookmarkButtonClick={handleBookmarkButtonClick}
              handleMoreButtonClick={handleMoreButtonClick}
              showBookmarkPopup={showBookmarkPopup}
              showMorePopup={showMorePopup}
            /> */}
            {/* Detail Content */}
            <ItemDetailContent websiteData={websiteData} isTop={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
