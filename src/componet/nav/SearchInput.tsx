// SearchInput.tsx
import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  searchInputRef,
}) => {
  return (
    <div className="flex items-center w-[500px] bg-white border border-[#BBBBBB] rounded-full py-3 px-[50px]">
      <Image
        height={20}
        width={20}
        src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
        alt="Search Icon"
        className="rounded-lg"
      />
      <input
        type="text"
        placeholder="Search for a website or category..."
        className="focus:outline-none focus:border-blue-500 pl-2 w-full"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={searchInputRef}
      />
    </div>
  );
};

export default SearchInput;
