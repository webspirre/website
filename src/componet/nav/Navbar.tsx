import React from 'react';
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=' bg-[#F8F7F4] p-4  border-b border-[#BBBBBB] items-center '>
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
      <Image
          height={60}
          width={150}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="rice"
          className="rounded-lg"
        />

        {/* search input box with search icon */}
        <div className="flex items-center w-[600px] bg-white border border-[#BBBBBB] rounded-full py-4 px-[50px]">
        <div className="]"> 
        <div className="">
       
        </div>




        <Image
          height={20}
          width={20}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
          alt="rice"
          className="rounded-lg"
        />
          </div>
          <input
            type="text"
            placeholder="Search for a website or category..."
            className=" focus:outline-none focus:border-blue-500 pl-2 w-full"
          />
          
        </div>


        <ul className="flex space-x-8 items-center ">
          <li><a href="#home" className="hover:underline font-bold">Pricing</a></li>
          <li><a href="#about" className="hover:underline font-bold">Log in</a></li>
          <li><a href="#contact" className="hover:underline bg-black p-3  px-8 text-white rounded-[10px] border border-[#BBBBBB] ">Sign Up</a></li>
          <li><a href="#contact" className="hover:underline">
            <Image
          height={20}
          width={50}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705727048/utilities/menu_rdtahr.svg"
          alt="rice"
          className=""
        /></a></li>
        </ul>
      </nav>
    </nav>
  );
}
