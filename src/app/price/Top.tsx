import Image from 'next/image';
import React from 'react'

function Top() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-10">
      <Image
        height={20}
        width={500}
        src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707424267/utilities/Unlimited_web_design_inspiration_sy8ftv.svg"
        alt="left"
        className=""
      />
      <p className="text-center text-[#6E6E6E] mt-4">
        Full freedom to discover some of the internet’s best designed <br /> websites
        and find fresh inspiration for your next project.
      </p>
    </div>
  );
}

export default Top
