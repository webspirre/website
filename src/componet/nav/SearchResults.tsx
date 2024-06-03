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
    { label: "All" },
    { label: "Software & SaaS" },
    { label: "AI" },
    { label: "Fintech" },
    { label: "Agency & Corporate" },
    { label: "E-Commerce" },
    { label: "Crypto & Web3" },
    { label: "Travel & Hospitality" },
    // Add other tabs as needed
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
      const activeCategory = tabs[activeTab].label;
      filteredResults = filteredResults.filter(
        (result) => result.category === activeCategory
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
      className="absolute overflow-y-auto scrollbar-hide items-center justify-center p-4 sm:px-[50px] z-10 w-[330px] sm:h-[450px] sm:w-[600px] bg-white border-l border-r border-b border-[#BBBBBB] rounded-b-md shadow-md"
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
          onClick={() => (window.location.href = `/detail/${result.id}`)}
          href={`/detail/${result.id}`}
          key={result.id}
          className="mb-8 flex items-center"
        >
          <div className="border-2 border-gray rounded-[10px] p-2">
            <Image
              height={14}
              width={14}
              src={result.logoUrl}
              alt={result.name}
              className="rounded-lg"
            />
          </div>
          <div className="ml-3 text-[12px] sm:text-[14px]">
            <p className="text-black mb-1 font-bold">{result.name}</p>
            {result.description && (
              <p className="text-gray-700">{result.description}</p>
            )}
          </div>
        </Link>
      ))}
      {filterResults().length === 0 && (
        <div className="flex justify-center flex-col items-center fade-in-out">
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1717446793/utilities/webspirre/Search_duotone_mjoudo.svg"
            alt="search"
          />
          <p className="text-[#959595] text-[12px] sm:text-[24px]">
            Start searching...
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
