"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";
import data from "../browse_designs/data";
import Link from "next/link";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import NavLinks from "./NavLinks";
import MoreNavLinks from "./MoreNavLinks";

export interface Project {
  id: number;
  name: string;
  category: string;
  logoUrl: string;
  description?: string;
}

interface NavbarProps {
  user?: any;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [showMoreNavLinks, setShowMoreNavLinks] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

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

  const handleInputClear = () => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const toggleMoreNavLinks = () => {
    setShowMoreNavLinks(!showMoreNavLinks);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target as Node)
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
    <nav className="bg-[#F8F7F4] relative px-4 pb-4 border-b border-[#BBBBBB] items-center">
      <nav className="max-w-screen mx-2 flex justify-between items-center">
        <Link href="/">
          <Image
            height={60}
            width={150}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
            alt="Logo"
            className="rounded-lg hidden sm:flex"
          />
          <Image
            height={43}
            width={57}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715204582/utilities/WhatsApp_Image_2024-05-07_at_15.43.18_a30adac2-removebg-preview_w6vuzw.png"
            alt="Logo"
            className="rounded-lg pt-2 sm:hidden"
          />
        </Link>
        {user ? <h1>TRUE</h1> : <h1>FALSE</h1>}
        <div className="relative">
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            onClear={handleInputClear}
            searchInputRef={searchInputRef}
            isFocused={showSearchResults}
          />

          {showSearchResults && (
            <div ref={searchResultsRef}>
              <SearchResults searchResults={searchResults} />
            </div>
          )}
        </div>
        <div className="flex gap-8">
          <NavLinks status={"authenticated"} />

          <MoreNavLinks
            showMoreNavLinks={showMoreNavLinks}
            toggleMoreNavLinks={toggleMoreNavLinks}
          />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
