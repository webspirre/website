// Import necessary modules and data

"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";
import data from "../browse_designs/data"; // Import your data file
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  category: string;
  logoUrl: string;
  description?: string;
}

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [showMoreNavLinks, setShowMoreNavLinks] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter data based on the search query
    const results = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleInputFocus = () => {
    setShowSearchResults(true);
  };

  const handleInputBlur = () => {
    // Delay hiding the search results to handle clicks on search results
    setTimeout(() => setShowSearchResults(false), 200);
  };

  const toggleMoreNavLinks = () => {
    setShowMoreNavLinks(!showMoreNavLinks);
  };

  // Close search results when clicking outside the search input and results
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F8F7F4] p-4 border-b border-[#BBBBBB] items-center">
      <nav className="max-w-screen mx-2 flex justify-between items-center">
        <Link href="/">
          <Image
            height={60}
            width={150}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
            alt="rice"
            className="rounded-lg"
          />
        </Link>
        <div className="relative">
          {/* search input box with search icon */}
          <div className="flex items-center w-[500px] bg-white border border-[#BBBBBB] rounded-full py-3 px-[50px]">
            <div>{/* Your search icon or additional elements */}</div>

            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
              alt="rice"
              className="rounded-lg"
            />
            <input
              type="text"
              placeholder="Search for a website or category..."
              className="focus:outline-none focus:border-blue-500 pl-2 w-full"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={searchInputRef}
            />

            {/* Display search results */}
            {showSearchResults && (
              <div className="absolute items-center justify-center right-0 -top-4 mt- p-4 px-[50px] z-10 w-fit bg-white border border-[#BBBBBB] rounded-md shadow-md ">
                <div className="flex items-center mb-4 w-[500px] bg-[#EDEDED]  border-[#BBBBBB] rounded-full py-3 px-[50px]">
                  <Image
                    height={20}
                    width={20}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
                    alt="rice"
                    className="rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Search for a website or category..."
                    className="focus:outline-none focus:border-black pl-2 w-full bg-[#EDEDED]"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    ref={searchInputRef}
                  />
                </div>
                {searchResults.map((result) => (
                  <div key={result.id} className="mb-8 flex items-center ">
                    <div className="border-2 border-gray rounded-[10px] p-2">
                      <Image
                        height={20}
                        width={35}
                        src={result.logoUrl}
                        alt={result.name}
                        className="rounded-lg"
                      />
                    </div>

                    <div className="ml-3">
                      <p className="text-black mb-1 font-bold">{result.name}</p>
                      {result.description && (
                        <p className="text-gray-700">{result.description}</p>
                      )}
                    </div>
                  </div>
                ))}
                {searchResults.length === 0 && (
                  <p className="text-gray-500">No matching results found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Regular navigation items */}
        <ul className="flex space-x-8 items-center">
          <li>
            <div className="hover: bg-[#fdf1af] p-2 px-4 text-black font font-medium rounded-[10px] text-[14px]  flex items-center gap-2 border-[#BBBBBB] ">
              <Image
                height={20}
                width={14}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432146/utilities/Vector_8_pv7c0p.svg"
                alt="rice"
                className="z-10"
              />
              Pro plan{" "}
            </div>
          </li>

          <div className="relative  ">
            <a
              href="#"
              className="p-2 border flex flex-row gap-2 rounded-full"
              onClick={toggleMoreNavLinks}
            >
              <Image
                height={20}
                width={40}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432454/utilities/profile_image_b4sbia.svg"
                alt="rice"
                className="z-10"
              />
              <Image
                height={20}
                width={35}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432726/utilities/hamburger_icon_mlednc.svg"
                alt="rice"
                className=""
              />
            </a>

            {/* More nav links pop-up */}
            {showMoreNavLinks && (
              <div className="absolute text-[12px] -right-[10px] mt-6  bg-white border z-10 w-[200px] rounded-md shadow-md">
                <Link href="/bookmark" className="block text-[black] mb-2 ">
                  <div className=" border-b pb-4 items-center pt-4">
                    <div className="flex items-center gap-2 px-4">
                      <Image
                        height={20}
                        width={25}
                        src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388441/utilities/Intersect_1_zn8u9a.svg"
                        alt="rice"
                        className=""
                      />
                      <p className="font-bold text-[14px]">Bookmark</p>
                    </div>
                  </div>
                </Link>
                <Link href="/profile" className="block text-[black] mb-4 ">
                  <div className="flex gap-2 px-4 items-center pt-2">
                    <Image
                      height={20}
                      width={25}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388442/utilities/Vector_4_orgh9u.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold text-[14px]">Profile</p>
                  </div>
                </Link>
                {/* <Link
                  href="/setting"
                  className="block text-[black] mb-4 hover:"
                >
                  <div className="flex gap-2 px-4 items-center pt-2">
                    <Image
                      height={20}
                      width={25}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707388441/utilities/Vector_5_izymzc.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold text-[14px]">Settings</p>
                  </div>
                </Link> */}
                <Link
                  href="/notifications"
                  className="block text-[black] mb-4 hover:"
                >
                  <div className="flex gap-2 px-4 items-center pt-2">
                    <Image
                      height={20}
                      width={25}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707389050/utilities/bell_icon_e0cutg.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold text-[14px]">Notifications</p>
                  </div>
                </Link>
                <Link
                  href="/notifications"
                  className="block text-[black] mb-4 hover:"
                >
                  <div className="flex items-center gap-2 px-4 pt-2">
                    <Image
                      height={20}
                      width={25}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058912/utilities/updates_icon_l9larw.svg"
                      alt="rice"
                      className=""
                    />
                    <p className="font-bold text-[14px]">Updates</p>
                  </div>
                </Link>

                <Link
                  href="/terms"
                  className="block text-[black] border-t mb-4 hover:"
                >
                  <div className="flex justify-between px-4 pt-4">
                    <p className=" text-[14px]">Terms</p>
                    <Image
                      height={20}
                      width={10}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                      alt="rice"
                      className=""
                    />
                  </div>
                </Link>
                <Link
                  href="/privacy"
                  className="block mb-4 text-[black] hover:"
                >
                  <div className="flex justify-between px-4">
                    <p className=" text-[14px]"> Privacy Policy</p>
                    <Image
                      height={20}
                      width={10}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                      alt="rice"
                      className=""
                    />
                  </div>
                </Link>
                <Link
                  href="/support"
                  className="block text-[black] mb-4 hover:"
                >
                  <div className="flex justify-between px-4">
                    <p className=" text-[14px]">Support</p>
                    <Image
                      height={20}
                      width={10}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706058587/utilities/arrow_up_wwf67d.svg"
                      alt="rice"
                      className=""
                    />
                  </div>
                </Link>
                <Link href="#updates" className="block text-[black] hover:">
                  <div className="flex gap-2 border-t-2  py-2 px-4 mb-2">
                    <p className=" text-[14px] text-red-600 font-bold">
                      Log Out
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </nav>
  );
}
