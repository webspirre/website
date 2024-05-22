// SearchResults.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Project } from "./Navbar"; // Import the Project type from Navbar.tsx
import TabButtons from "./TabButtons";



interface SearchResultsProps {
  searchResults: Project[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
   const [activeTab, setActiveTab] = useState(0);
   const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
   const tabs = [
     { label: "All" },
     { label: "Software & SaaS" },
     { label: "E-commerce" },
     { label: "All" },
     { label: "All" },
     { label: "All" },
     { label: "All" },
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


  return (
    <div className="absolute items-center justify-center  p-4 sm:px-[50px] z-10 w-[350px] sm:w-[600px] bg-white border-l border-r border-b border-[#BBBBBB] rounded-b-md shadow-md">
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
      {searchResults.map((result) => (
        <div key={result.id} className="mb-8 flex items-center">
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
        </div>
      ))}
      {searchResults.length === 0 && (
        <p className="text-gray-500 text-[12px] sm:text-[14px]">
          No matching results found.
        </p>
      )}
    </div>
  );
};

export default SearchResults;




