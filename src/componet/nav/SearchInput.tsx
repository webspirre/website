// SearchInput.tsx
import React, { ChangeEvent, useRef, useState } from "react";
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div
        className={` relative sm:flex hidden  justify-center pt-[20px] w-[600px] ${
          isFocused
            ? "bg-white border-l border-r border-t rounded-t-md border-[#BBBBBB]"
            : "bg-[#F8F7F4]"
        } `}
      >
        <div
          className={`flex items-center w-[500px] ${
            isFocused ? "bg-[#EDEDED]" : "bg-white"
          } border border-[#BBBBBB] rounded-full py-3 px-[50px]`}
        >
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
            className="focus:outline-none focus:bg-[#EDEDED] pl-2 w-full"
            value={value}
            onChange={onChange}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
            ref={searchInputRef}
          />
        </div>
      </div>

      {/* mobile search */}
      <div>
        <div
          className={` relative sm:hidden flex justify-center  pt-[10px] px-4 ${
            isFocused
              ? "bg-white border-l border-r border-t absolute w-[300px]  rounded-t-md border-[#BBBBBB]"
              : "bg-[#F8F7F4] w-[250px] "
          } `}
        >
          <div
            className={`flex items-center  w-[250px] ${
              isFocused ? "bg-[#EDEDED]" : "bg-white"
            } border border-[#BBBBBB] rounded-full py-2 px-3 sm:py-3 sm:px-[50px]`}
          >
            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
              alt="Search Icon"
              className=""
            />
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none focus:bg-[#EDEDED] pl-2 w-full"
              value={value}
              onChange={onChange}
              onFocus={() => {
                onFocus();
                setIsFocused(true);
              }}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              ref={searchInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;