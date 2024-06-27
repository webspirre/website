"use client";
import React from "react";

const imageSources1 = [
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1718435071%2Fwebspirre_assests%2Finydz57jmb0optdlpmmz.webp&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1718684528%2Fwebspirre_assests%2Fd9kp7t62bza0uztppbx6.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1718686612%2Fwebspirre_assests%2Firke9m6tfcdabozvwdzp.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1718703679%2Fwebspirre_assests%2Fubzwuzowdbo2s6zbx4s0.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1718730391%2Fwebspirre_assests%2Fytxbkvdyw2k3ddtn1uqq.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719425587%2Fwebspirre_assests%2Fzqbj8z1r8s8dyfzmx1sy.webp&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719423071%2Fwebspirre_assests%2Fhpc09gcmi1nkmbvaofxi.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719424432%2Fwebspirre_assests%2Fwn4tn2p7nwil4zezxowg.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719428726%2Fwebspirre_assests%2Ffwr76gkusln4lz1lawwf.webp&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719434854%2Fwebspirre_assests%2Fce45ascanktkurm2saln.png&w=750&q=75",
  "https://www.webspirre.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwqantex4%2Fimage%2Fupload%2Fv1719471694%2Fwebspirre_assests%2Fzfm8qofp1cz5vf2g77i5.png&w=750&q=75",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
  "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707197538/utilities/image_8_zggunt.svg",
];

const imageSources2 = [
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
    <div className="grid grid-cols-3 gap-2">
      {/* first col */}
      <div className="col-span-1 slider flex flex-col gap-4">
        <div className="slide flex flex-col gap-4">
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
      <div className="col-span-1 slider1 flex flex-col gap-4">
        <div className="slide1 flex flex-col gap-4">
          {imageSources2.map((src, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden border- rounded-[10px]"
            >
              <img key={index} src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="slide1 flex flex-col gap-4">
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
        <div className="slide flex flex-col gap-4">
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
