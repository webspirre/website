"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";
import data from "../browse_designs/data";
import Link from "next/link";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import NavLinks from "./NavLinks";
import MoreNavLinks from "./MoreNavLinks";
import { fetchDesigns } from "@/utils/designs/server";
import { Database } from "@/types/types_db";
import { DesignT } from "@/types/Design.type";

export interface Project {
  id: number;
  name: string;
  category: string;
  logoUrl: string;
  description?: string;
  pageType: string;
}

interface NavbarProps {
  user?: any;
}
type Designs = Database["public"]["Tables"]["website"]["Row"];

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Designs[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [showMoreNavLinks, setShowMoreNavLinks] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const moreNavLinksRef = useRef<HTMLDivElement>(null);

  //// SUPABASE
  const [designs, setDesigns] = useState<Designs[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const displayDesigns = async () => {
    setLoading(true); // Set loading to true when starting to fetch designs
    const designs = await fetchDesigns();
    console.log("Data Response", designs);
    if (designs) {
      setDesigns(designs);
    }
    setLoading(false); // Set loading to false when designs are fetched
  };

  useEffect(() => {
    displayDesigns();
  }, []);
  // SUPABASE

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = designs.filter(
      (item) =>
       (item.name && item.name.toLowerCase().includes(query.toLowerCase()) )||
      ( item?.categories && item.categories[0].toLowerCase().includes(query.toLowerCase())) ||
        (item.shortDescription &&
          item.shortDescription.toLowerCase().includes(query.toLowerCase()))
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

      if (
        moreNavLinksRef.current &&
        !moreNavLinksRef.current.contains(e.target as Node)
      ) {
        setShowMoreNavLinks(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F8F7F4] relative px-4 pb-3 border-b  flex justify-center border-[#BBBBBB] items-center">
      <nav className=" w-full  max-w-[1350px] mx-2 flex justify-between items-center">
        <Link href={user ? "/in-app" : "/"}>
          <Image
            height={60}
            width={120}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
            alt="Logo"
            className="rounded-lg hidden sm:flex pt-4 "
          />
          <Image
            height={43}
            width={57}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715204582/utilities/WhatsApp_Image_2024-05-07_at_15.43.18_a30adac2-removebg-preview_w6vuzw.png"
            alt="Logo"
            className="rounded-lg pt-2 sm:hidden"
          />
        </Link>
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
        <div className="flex gap-[40px]">
          <NavLinks status={"authenticated"} />

          <MoreNavLinks
            ref={moreNavLinksRef}
            showMoreNavLinks={showMoreNavLinks}
            toggleMoreNavLinks={toggleMoreNavLinks}
            user={user}
          />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
