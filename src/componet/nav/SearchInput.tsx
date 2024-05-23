// SearchInput.tsx
import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onClear: () => void;

  searchInputRef: React.RefObject<HTMLInputElement>;
  isFocused: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onFocus,
  onClear,
  searchInputRef,
  isFocused,
}) => {

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
          } border border-[#BBBBBB] rounded-full py-3 pl-[50px] pr-[20px]`}
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
            onFocus={onFocus}
            ref={searchInputRef}
          />
          <button
            className={`bg-white rounded-full border px-2 border-stroke ${
              isFocused ? "block" : "hidden"
            } `}
            // onClick={onClear}
          >
            x
          </button>
        </div>
      </div>

      {/* mobile search */}
      <div className={`  ${isFocused ? "" : " "} `}>
        <div
          className={` relative sm:hidden flex justify-center  pt-[10px]  h-[41px] px-4 ${
            isFocused
              ? "bg-white border-l border-r border-t absolute w-[330px]  rounded-t-md border-[#BBBBBB]"
              : "bg-[#F8F7F4] w-[221px] "
          } `}
        >
          <div
            className={`flex items-center   ${
              isFocused ? "bg-[#EDEDED] w-[350px]" : "bg-white w-[221px]"
            } border border-[#BBBBBB] rounded-full py-2 px-3 sm:py-3 sm:px-[50px]`}
          >
            <Image
              height={14}
              width={14}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
              alt="Search Icon"
              className=""
            />
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none focus:bg-[#EDEDED] pl-2 text-[14px] w-full"
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              ref={searchInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
