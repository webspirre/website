// Navbar.tsx
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";
import data from "../browse_designs/data"; // Import your data file
import Link from "next/link";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import NavLinks from "./NavLinks";
import MoreNavLinks from "./MoreNavLinks";

// Define the Project type
export interface Project {
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
    <nav className="bg-[#F8F7F4] px-4 pb-4 border-b border-[#BBBBBB] items-center">
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
            height={60}
            width={60}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715204582/utilities/WhatsApp_Image_2024-05-07_at_15.43.18_a30adac2-removebg-preview_w6vuzw.png"
            alt="Logo"
            className="rounded-lg pt-2 sm:hidden"
          />
        </Link>
        <div className="relative">
          {/* Search input box with search icon */}
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            searchInputRef={searchInputRef}
          />

          {/* Display search results */}
          {showSearchResults && <SearchResults searchResults={searchResults} />}
        </div>

        {/* Regular navigation items */}
        <NavLinks status={"authenticated"} />

        {/* More nav links */}
        <MoreNavLinks
          showMoreNavLinks={showMoreNavLinks}
          toggleMoreNavLinks={toggleMoreNavLinks}
        />
      </nav>
    </nav>
  );
}
