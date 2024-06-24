"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import NavLinks from "./NavLinks";
import MoreNavLinks from "./MoreNavLinks";
import { fetchDesigns } from "@/utils/designs/server";
import { usePathname, useRouter } from "next/navigation";
import { getRedirectMethod } from "@/libs/auth-helpers/settings";
import { Database } from "@/types/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface NavbarProps {
  user?: any;
}

type Designs = Database["public"]["Tables"]["website"]["Row"];
type Profiles = Database["public"]["Tables"]["users"]["Row"];


const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Designs[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [showMoreNavLinks, setShowMoreNavLinks] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [designs, setDesigns] = useState<Designs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const moreNavLinksRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const redirectMethod = getRedirectMethod();
  const supabase = createClientComponentClient<Database>();

  const displayDesigns = async () => {
    setLoading(true);
    const designs = await fetchDesigns();
    if (designs) {
      setDesigns(designs);
    }
    setLoading(false);
  };

  useEffect(() => {
    displayDesigns();
  }, []);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = designs.filter(
      (item) =>
        (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
        (item?.categories &&
          item.categories[0].toLowerCase().includes(query.toLowerCase())) ||
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

  // Fetch avatar URL if user is present
  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
        console.log("Avatar URL: ", url); // Debug log
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (user?.avatar_url) downloadImage(user.avatar_url);
  }, [user, supabase]);


  const hideDivRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgotpassword",
  ];
  const shouldHideDiv = hideDivRoutes.includes(pathname);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("DOMContentLoaded", handleStart);
    window.addEventListener("load", handleStop);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("DOMContentLoaded", handleStart);
      window.removeEventListener("load", handleStop);
    };
  }, []);

  return (
    <div className={`relative ${shouldHideDiv ? "hidden" : ""}`}>
      <nav className="bg-[#F8F7F4] relative px-4 pb-3 border-b flex justify-center border-[#BBBBBB] items-center">
        <nav className="w-full  max-w-[1350px] mx-2 flex justify-between items-center">
          <Link href={user ? "/in-app" : "/"}>
            <Image
              height={60}
              width={120}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
              alt="Logo"
              className="rounded-l img hidden sm:flex pt-4 "
            />
            <Image
              height={43}
              width={68}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715204582/utilities/WhatsApp_Image_2024-05-07_at_15.43.18_a30adac2-removebg-preview_w6vuzw.png"
              alt="Logo"
              className="rounded-lg -ml-3 pt-3 sm:hidden"
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
          <div className="flex gap-[20px]">
            <NavLinks status={"authenticated"} user={user} />

            <MoreNavLinks
              ref={moreNavLinksRef}
              showMoreNavLinks={showMoreNavLinks}
              toggleMoreNavLinks={toggleMoreNavLinks}
              user={user}
            />
          </div>
        </nav>
      </nav>
      {/* <div className="hidden">
        <LoadingIndicator isLoading={isLoading} />
      </div> */}
    </div>
  );
};

export default Navbar;
