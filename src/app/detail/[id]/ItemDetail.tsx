import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../../../componet/browse_designs/data";
import cx from "classnames";
import BottomBar from "./BottomBar";
import { Database } from "@/types/types_db";
import { fetchDesigns, fetchDesignByID } from "@/utils/designs/server";
import SpinLoader from "@/componet/common/spinloader";

interface ItemDetailProps {
  id: string;
  onNext: () => void;
  onPrevious: () => void;
  user: any;
  toogleModal: () => void;
}

type Designs = Database["public"]["Tables"]["website"]["Row"];

const ItemDetailContent: React.FC<{ websiteData: any; isTop?: boolean }> = ({
  websiteData,
  isTop,
}) => {

    const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
      event.preventDefault();
    };
  return (
    <>
      {/* Detail Content */}
      <div
        className={cx(
          isTop
            ? "block md:hidden mb-10 p-3"
            : "hidden md:block sm:w-[350px]  p-4 border-[#F3F4F6] border-2 shadow-lg rounded-lg",
          "sm:mt-8 mt-1"
        )}
      >
        <div className="flex gap-4 mb-4 items-center">
          {/* website logo */}
          <Image
            height={20}
            width={44}
            src={websiteData.logoImageURL}
            alt="rice"
            className="p- rounded-[12px] border-[#F1F0EE]"
            onContextMenu={handleContextMenu}
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
                  <td className="p-2">{websiteData.categories[0]}</td>
                </tr>
                <tr className="text-[12px] text-[#6E6E6E]">
                  <td className="p-2">Views</td>
                  {/* number of views */}
                  <td className="p-2">
                    {websiteData.views ? websiteData.views : "0"}
                  </td>
                </tr>
                <tr className="text-[12px] text-[#6E6E6E]">
                  <td className="p-2">Last updated</td>
                  {/* last updated */}
                  <td className="p-2">{websiteData.date}</td>
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
                  {/* number of views */}
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

function ItemDetail({
  id,
  onNext,
  onPrevious,
  user,
  toogleModal,
}: ItemDetailProps) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);

  const [websiteData, setDesignData] = useState<Designs>();

  const displayDesign = async () => {
    const design = await fetchDesignByID(id);

    if (design) {
      setDesignData(design);
    }
  };

  useEffect(() => {
    displayDesign();
  }, [id]);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };

  const [showMorePopup, setShowMorePopup] = useState(false);
  const [showBookmarkPopup, setShowBookmarkPopup] = useState(false);

  const handleMoreButtonClick = () => {
    setShowMorePopup((prevState) => !prevState);
    setShowBookmarkPopup(false);
  };

  const handleBookmarkButtonClick = () => {
    setShowBookmarkPopup((prevState) => !prevState);
    setShowMorePopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowMorePopup(false);
        setShowBookmarkPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!websiteData) {
    // return <div>Loading...</div>;
    return <SpinLoader />;
  }

  const webImgUrl = isMobileView
    ? websiteData?.mobileFpURL
    : websiteData?.desktopFpURL;
  if (!webImgUrl) {
    throw new Error("URL is not defined");
  }
  let webImgAlt = websiteData?.name;
  if (!webImgAlt) {
    throw new Error("URL is not defined");
  }
  let webUrl = websiteData?.webURL;
  if (!webUrl) {
    throw new Error("webURL is not defined");
  }
  const handleCopyToClipboard = async () => {
    const url = isMobileView
      ? websiteData?.mobileFpURL
      : websiteData?.desktopFpURL;

    if (!url) {
      throw new Error("URL is not defined");
    }
    try {
      const response = await fetch(url);
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
        ? websiteData?.mobileFpURL
        : websiteData?.desktopFpURL;
      const urlL = imageUrl;
      if (!urlL) {
        throw new Error("URL is not defined");
      }
      const response = await fetch(urlL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = websiteData?.name ?? "default-filename";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to download image: ", err);
    }
  };

   const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
     event.preventDefault();
  };
  
  return (
    <div className="  max-w-[1350px] mt-[50pt] sm:mt-0 ">
      <div className="sm:mr-[]">
        {/* previous button, to move to the previous website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_dbhadp.svg"
          alt="left"
          className="fixed z-10 top-[50%] sm:left-8 shadow-md rounded-full cursor-pointer w-12 sm:w-auto"
          onClick={handlePrevious}
        />
        {/* next button, to move to the next website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_1_ugfikx.svg"
          alt="right"
          className="fixed z-10 top-[50%] right-2 sm:right-8 shadow-md rounded-full cursor-pointer w-12 sm:w-auto"
          onClick={handleNext}
        />
      </div>
      {/* Detail Item Content */}
      <ItemDetailContent websiteData={websiteData} isTop={true} />{" "}
      <div className="">
        <div className="w-fit bg-[#F1F0EE]  p-1 md:p-2 sm:mx-[40px mb-8 shadow-md rounded-full">
          {/* Desktop and Mobile switch, to show the desktop or mobile image on the website image space*/}
          <div className="flex text-[12px] items-center ustify-center space-x-4 ">
            <div
              className={`cursor-pointer ${
                !isMobileView
                  ? "bg-white rounded-full shadow-lg p-2 px-6 transition- transform duration-300 ease-in-out"
                  : "p-2 pl-6"
              }`}
              onClick={() => setIsMobileView(false)}
            >
              Desktop
            </div>
            <div
              className={`cursor-pointer ${
                isMobileView
                  ? "bg-white rounded-full shadow-md p-2 px-6 transition- transform duration-300 ease-in-out"
                  : "p-2 pr-6"
              }`}
              onClick={() => setIsMobileView(true)}
            >
              Mobile
            </div>
          </div>
        </div>
        <div className=" flex w-full">
          <div className="grid grid-cols-1 sm:grid-cols-6  gap-4">
            {/* First Column */}
            <div
              className={`sm:col-span-4 col-span-1 flex w-full  justify-center mx-auto`}
            >
              <div className="bg-[#F1F0EE] p-4 justify-center rounded-[20px] w-full flex">
                {/* the website image */}
                <Image
                  height={isMobileView ? 50 : 20}
                  width={isMobileView ? 300 : 700}
                  src={webImgUrl}
                  alt={webImgAlt}
                  className="shadow-lg transition- transform duration-500 ease-in-out border-2 rounded-md"
                  onContextMenu={handleContextMenu}
                />
              </div>
            </div>

            {/* Second Column */}
            <div className={`col-span-1 sm:col-span-2  px-4`}>
              {/* Your content for the second column */}
              <div className="flex w-full relative  gap-4">
                <div className=" relative" ref={modalRef}>
                  {showMorePopup && (
                    <div className="flex z-10 w-[400px] absolute left-0 top-12 ">
                      <div className=" flex items-center justify-center">
                        <div
                          className=" z-[999] sm:z-10 text-[14px] font-medium border bg-white rounded-md shadow-md p-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div
                            className="flex gap-2 text-[12px] mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                            // onClick={handleCopyToClipboard}
                            onClick={user ? handleCopyToClipboard : toogleModal}
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
                            className="flex gap-2 text-[12px] cursor-pointer hover:scale-105 transition-transform duration-300"
                            // onClick={handleDownloadImage}
                            onClick={user ? handleDownloadImage : toogleModal}
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
                    </div>
                  )}
                  <div
                    className="p-4  flex items-center bg-[#F1F0EE] border border-[#94A3B8] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
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
                  </div>
                </div>
                {/* Website Link */}
                <a
                  href={`https://${webUrl}?ref=webspirre.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="py-2 px-4 gap-2 bg-[black] text-white flex items-center rounded-lg hover:scale-105 transition-transform duration-300">
                    <p className="font-bold text-[12px]">Visit Site</p>
                    <Image
                      height={20}
                      width={15}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554673/utilities/arrow_up_1_hwov3p.svg"
                      alt="rice"
                      className=""
                    />
                  </div>
                </a>
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
    </div>
  );
}

export default ItemDetail;
