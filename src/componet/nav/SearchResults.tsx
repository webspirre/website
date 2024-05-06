// SearchResults.tsx
import React from "react";
import Image from "next/image";

interface SearchResultsProps {
  searchResults: Project[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div className="absolute items-center justify-center right-0 -top-4 mt- p-4 px-[50px] z-10 w-fit bg-white border border-[#BBBBBB] rounded-md shadow-md ">
      {/* Display search results */}
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
  );
};

export default SearchResults;
