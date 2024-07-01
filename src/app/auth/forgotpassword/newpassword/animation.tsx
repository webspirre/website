"use client";
import React from "react";
import Image from "next/image";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
} from "../../../images/index";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

const imageSources1 = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img11,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img11,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
];

const imageSources2 = [
  img11,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img14,
  img15,
  img16,
  img12,
  img13,
  img9,
  img11,
  img11,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img14,
  img15,
  img16,
  img12,
  img13,
  img9,
  img11,
];

const imageSources3 = [
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img2,
  img16,
  img1,
  img2,
  img3,
  img14,
  img14,
  img15,
  img16,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img12,
  img13,
  img9,
  img10,
  img14,
  img15,
  img2,
  img16,
  img1,
  img2,
  img3,
  img14,
];

function isStaticImageData(src: any): src is StaticImageData {
  return typeof src === "object" && src !== null && "src" in src;
}

function Animation() {
  return (
    <div className="grid grid-cols-3 gap-2 px-2">
      {/* First column */}
      <div className="col-span-1 slider flex flex-col gap-2">
        <div className="slide flex flex-col gap-2">
          {imageSources1.map((src, index) => (
            <div
              key={index}
              className="h-[400px] w-full bg-[#ebebeb] overflow-hidden border-4 rounded-[10px]"
            >
              {isStaticImageData(src) ? (
                <Image src={src} alt="" />
              ) : (
                <img src={src} alt="" />
              )}
              {isStaticImageData(src) ? (
                <Image src={src} alt="" />
              ) : (
                <img src={src} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second column */}
      <div className="col-span-1 slider1 flex flex-col gap-2">
        <div className="slide1 flex flex-col gap-2">
          {imageSources2.map((src, index) => (
            <div
              key={index}
              className="h-[400px] w-full bg-[#ebebeb] overflow-hidden border-4 rounded-[10px]"
            >
              {isStaticImageData(src) ? (
                <Image
                  src={src}
                  alt=""
                  // layout="fill" objectFit="cover"
                />
              ) : (
                <img src={src} alt="" />
              )}
              {isStaticImageData(src) ? (
                <Image
                  src={src}
                  alt=""
                  // layout="fill" objectFit="cover"
                />
              ) : (
                <img src={src} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Third column */}
      <div className="col-span-1 slider flex flex-col gap-2">
        <div className="slide flex flex-col gap-2 ">
          {imageSources3.map((src, index) => (
            <div
              key={index}
              className="h-[400px] w-full bg-[#ebebeb] overflow-hidden border-4 rounded-[10px]"
            >
              {isStaticImageData(src) ? (
                <Image src={src} alt="" />
              ) : (
                <img src={src} alt="" />
              )}
              {isStaticImageData(src) ? (
                <Image src={src} alt="" />
              ) : (
                <img src={src} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
