import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// import { Project } from "./Navbar"; // Import the Project type from Navbar.tsx
import TabButtons from "./TabButtons";
import Link from "next/link";
import { DesignT } from "@/types/Design.type";
import { Database } from "@/types/types_db";

type Designs = Database["public"]["Tables"]["website"]["Row"];
interface SearchResultsProps {
  searchResults: Designs[];
}
const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const searchResultRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { value: "all", label: "All" },
    { value: "ai", label: "AI" },
    { value: "fintech", label: "Fintech" },
    { value: "marketplace", label: "Marketplace" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "crypto-web3", label: "Crypto & Web 3" },
    { value: "software-saas", label: "Software & SaaS" },
    { value: "travel-hospitality", label: "Travel & Hospitality" },
    { value: "agency-corporate", label: "Agency & Corporate" },
  ];

  const filterOptions = [
    "landing",
    "pricing",
    "about",
    "login",
    "signup",
    "404",
  ];

  const handleFilterClick = (option: string) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const filterResults = () => {
    let filteredResults = searchResults;

    // Filter by active tab
    if (activeTab !== 0) {
      const activeCategory = tabs[activeTab].value;
      filteredResults = filteredResults.filter((result) =>
        result.categories?.includes(activeCategory)
      );
    }

    // Filter by selected filters
    if (selectedFilters.length > 0) {
      filteredResults = filteredResults.filter((result) =>
        selectedFilters.includes(result.pageType as string)
      );
    }

    return filteredResults;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target as Node)
      ) {
        setShowFilterOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchResultRef}
      className="absolute overflow-y-auto scrollbar-hide items-center justify-center p-4 sm:px-[50px] z-10 w-[360px] sm:h-[450px] sm:w-[550px] bg-white border-l border-r sm:border-t border-b border-[#BBBBBB] rounded-b-md shadow-md"
    >
      {/* Filter bar option section */}
      <TabButtons
        tabs={tabs}
        onTabClick={setActiveTab}
        activeTab={activeTab}
        filterOptions={filterOptions}
        selectedFilters={selectedFilters}
        handleFilterClick={handleFilterClick}
        showFilterOptions={showFilterOptions}
        setShowFilterOptions={setShowFilterOptions}
      />

      {/* Display search results */}
      {filterResults().map((result) => (
        <Link
          onClick={() => (window.location.href = `/detail/${result.uid}`)}
          href={`/detail/${result.uid}`}
          key={result.uid}
          className="mb-8 flex items-center"
        >
          <div className="borde border-gray rounded-[10px] h-[36px] w-[36px] overflow-hidden ">
            <div className="flex h-[36px] w-[36px]">
              <Image
                height={14}
                width={56}
                src={result?.logoImageURL as string}
                alt={result?.name as string}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="ml-3 text-[12px] sm:text-[14px]">
            <p className="text-black mb- font-bold">{result.name}</p>
            {result.shortDescription && (
              <p className="text-gray-700">{result.shortDescription}</p>
            )}
          </div>
        </Link>
      ))}
      {filterResults().length === 0 && (
        <div className="flex justify-center flex-col items-center fade-in-out">
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1717446793/utilities/webspirre/Search_duotone_mjoudo.svg"
            alt="search"
            className="w-[204px]"
          />
          <p className="text-[#959595] text-[12px] sm:text-[14px]">
            Start searching...
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
