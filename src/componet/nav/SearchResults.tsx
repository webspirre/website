import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Project } from "./Navbar"; // Import the Project type from Navbar.tsx
import TabButtons from "./TabButtons";
import Link from "next/link";

interface SearchResultsProps {
  searchResults: Project[];
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
    "Landing Page",
    "Pricing Page",
    "About Page",
    "Login Page",
    "Sign Up Page",
    "404 Page",
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
      filteredResults = filteredResults.filter(
        (result) => result.categories[0] === activeCategory
      );
    }

    // Filter by selected filters
    if (selectedFilters.length > 0) {
      filteredResults = filteredResults.filter((result) =>
        selectedFilters.includes(result.pageType)
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
      className="absolute overflow-y-auto scrollbar-hide items-center justify-center p-4 sm:px-[50px] z-10 w-[330px] sm:h-[450px] sm:w-[550px] bg-white border-l border-r border-t border-b border-[#BBBBBB] rounded-b-md shadow-md"
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
          key={result.id}
          className="mb-8 flex items-center"
        >
          <div className="border-2 border-gray rounded-[10px] p-2">
            <Image
              height={14}
              width={14}
              src={result.logoImageURL}
              alt={result.name}
              className="rounded-lg"
            />
          </div>
          <div className="ml-3 text-[12px] sm:text-[14px]">
            <p className="text-black mb-1 font-bold">{result.name}</p>
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
