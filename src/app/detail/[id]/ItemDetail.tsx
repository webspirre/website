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
            : "hidden md:block p-4 border-[#F3F4F6] border-2 shadow-lg rounded-lg",
          "mt-0 md:mt-8"
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
              <tbody className="flex space-x-1 text-[10px] text-[#6E6E6E]">
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
  const websiteData = data[id];

  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };

  return (
    <div className="">
      <div className="">
        {/* previous button, to move to the previous website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_dbhadp.svg"
          alt="left"
          className="fixed z-10 top-[50%] shadow-md rounded-full cursor-pointer"
          onClick={handlePrevious}
        />
        {/* next button, to move to the next website detail */}
        <Image
          height={20}
          width={55}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706587852/utilities/slider_nav_1_ugfikx.svg"
          alt="right"
          className="fixed z-10 top-[50%] right-20 shadow-md rounded-full cursor-pointer"
          onClick={handleNext}
        />
      </div>
      {/* Detail Item Content */}
      <ItemDetailContent websiteData={websiteData} isTop={true} />{" "}
      <div className="w-fit bg-[#F1F0EE] p-1 md:p-2 mx-auto sm:ml-[80px] mb-8 shadow-md rounded-full">
        {/* Desktop and Mobile switch, to show the desktop or mobile image on the website image space*/}
        <div className="flex items-center justify-center space-x-4 ">
          <div
            className={`cursor-pointer ${
              !isMobileView
                ? "bg-white rounded-full shadow-lg p-3 px-6"
                : "p-4 pl-6"
            }`}
            onClick={() => setIsMobileView(false)}
          >
            Desktop
          </div>
          <div
            className={`cursor-pointer ${
              isMobileView
                ? "bg-white rounded-full shadow-md p-3 px-6"
                : "p-4 pr-6"
            }`}
            onClick={() => setIsMobileView(true)}
          >
            Mobile
          </div>
        </div>
      </div>
      <div className="w-[90%] ml-2 sm:ml-[80px] flex item-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          {/* First Column */}
          <div className={`col-span-4 mx-auto`}>
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
          <div className={`col-span-2 px-4`}>
            {/* Your content for the second column */}
            <div className="flex gap-4">
              <div className="p-4 flex items-center bg-[#F1F0EE] border border-[#94A3B8] rounded-lg">
                {/* bookmark botton */}
                <Image
                  height={20}
                  width={20}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554617/utilities/Intersect_vjti3y.svg"
                  alt="bookmark"
                  className=""
                />
              </div>
              <div className="p-4 flex items-center bg-[#F1F0EE] border border-[#94A3B8] rounded-lg">
                {/* More Option button */}
                <Image
                  height={20}
                  width={20}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554697/utilities/Union_weecgj.svg"
                  alt="rice"
                  className=""
                />
              </div>
              {/* Website Link */}
              <Link href="/">
                <div className="p-4 gap-2 bg-[black] text-white flex items-center rounded-lg">
                  <p className="font-bold">Visit Site</p>
                  <Image
                    height={20}
                    width={20}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554673/utilities/arrow_up_1_hwov3p.svg"
                    alt="rice"
                    className=""
                  />
                </div>
              </Link>
            </div>

            <BottomBar />
            {/* Detail Content */}
            <ItemDetailContent websiteData={websiteData} isTop={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
