"use client";
import React from "react";

const imageSources1 = [
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718703679/webspirre_assests/ubzwuzowdbo2s6zbx4s0.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719471694/webspirre_assests/zfm8qofp1cz5vf2g77i5.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718730391/webspirre_assests/ytxbkvdyw2k3ddtn1uqq.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719434854/webspirre_assests/ce45ascanktkurm2saln.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719502738/webspirre_assests/jwbuf3qcige7p2maxyi8.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718684528/webspirre_assests/d9kp7t62bza0uztppbx6.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719425587/webspirre_assests/zqbj8z1r8s8dyfzmx1sy.webp",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718684528/webspirre_assests/d9kp7t62bza0uztppbx6.png",


  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
];

const imageSources2 = [
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719428726/webspirre_assests/fwr76gkusln4lz1lawwf.webp",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719423071/webspirre_assests/hpc09gcmi1nkmbvaofxi.png",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",

  "https://res.cloudinary.com/dwqantex4/image/upload/v1718703679/webspirre_assests/ubzwuzowdbo2s6zbx4s0.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719471694/webspirre_assests/zfm8qofp1cz5vf2g77i5.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718730391/webspirre_assests/ytxbkvdyw2k3ddtn1uqq.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719434854/webspirre_assests/ce45ascanktkurm2saln.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719502738/webspirre_assests/jwbuf3qcige7p2maxyi8.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1718684528/webspirre_assests/d9kp7t62bza0uztppbx6.png",
  "https://res.cloudinary.com/dwqantex4/image/upload/v1719425587/webspirre_assests/zqbj8z1r8s8dyfzmx1sy.webp",
];

const imageSources3 = [
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",


  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
];

function Animation() {
  return (
    <div className="grid grid-cols-3 gap-2 bg-[#ebebeb] px-2">
      {/* first col */}
      <div className="col-span-1 slider flex flex-col gap-4 ">
        <div className="slide flex flex-col gap-4 bg-[#ebebeb]">
          {imageSources1.map((src, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden border- rounded-[10px]"
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* second col */}
      <div className="col-span-1 slider1 flex flex-col gap-4 bg-[#ebebeb]">
        <div className="slide1 flex flex-col gap-4 bg-[#ebebeb]">
          {imageSources2.map((src, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden border- rounded-[10px]"
            >
              <img key={index} src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="slide1 flex flex-col gap-4 bg-[#ebebeb]">
          {imageSources2.map((src, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden border- rounded-[10px]"
            >
              <img key={index} src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* 3rd col */}
      <div className="col-span-1 slider flex flex-col gap-4">
        <div className="slide flex flex-col gap-4 bg-[#ebebeb]">
          {imageSources3.map((src, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden border- rounded-[10px]"
            >
              <img key={index} src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
