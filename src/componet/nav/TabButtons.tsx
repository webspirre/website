import React, { useState } from "react";
import Image from "next/image";

interface Tab {
  label: string;
}

interface TabButtonsProps {
  tabs: Tab[];
  onTabClick: (index: number) => void;
  activeTab: number;
  filterOptions: string[];
  selectedFilters: string[];
  handleFilterClick: (option: string) => void;
  showFilterOptions: boolean;
  setShowFilterOptions: (show: boolean) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({
  tabs,
  onTabClick,
  activeTab,
  filterOptions,
  selectedFilters,
  handleFilterClick,
  showFilterOptions,
  setShowFilterOptions,
}) => {
  const categoryCounts = tabs.map(({ label }) => ({
    label,
    count: 0, // Adjust according to your data
  }));

  return (
    <div className="flex mb-4 text-[12px] sm:text-[14px]">
      <div className="mr-2 relative z-10">
        <button
          onClick={() => setShowFilterOptions(!showFilterOptions)}
          className=""
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 min-w-fit px-4 py-1 sm:py-2 bg-[#F1F0EE] rounded-full">
              <Image
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705965289/utilities/Vector_dlval9.svg"
                width={20}
                height={50}
                alt="design"
              />
              <p className="font-bold text-center">Filter</p>
            </div>
            <div className="h-[40px] mr-4 min-w-[1px] bg-[#BDBDBD]"></div>
          </div>
        </button>

        {showFilterOptions && (
          <div className="absolute top-8 w-[150px] text-[14px] font-medium bg-white border border-gray-300 p-2 mt-4 rounded-md shadow-md">
            {filterOptions.map((option, index) => (
              <div key={index} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedFilters.includes(option)}
                  onChange={() => handleFilterClick(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="flex items-center overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          className="flex sm:gap-2 custom-scrollbar w-[500px]"
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabClick(index)}
              className={`px-4 py-1 sm:py-2 border-b-2 mr-2 w-fit ${
                activeTab === index
                  ? "border-2 rounded-full bg-black text-white font-medium"
                  : "border-2 rounded-full text-black hover:text-gray-700 font-medium hover:border-gray-500"
              }`}
            >
              {(categoryCounts.find((c) => c.label === tab.label)?.count ?? 0) >
              0 ? (
                <div className="flex gap-2 items-center">
                  <div>{tab.label}</div>
                  <div
                    className={`bg-[#F3F4F6] rounded-full p-1 text-[12px] ${
                      activeTab === index
                        ? "rounded-full bg-[#F3F4F6] text-black"
                        : "rounded-full text-black hover:text-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {categoryCounts.find((c) => c.label === tab.label)?.count ??
                      0}
                  </div>
                </div>
              ) : (
                tab.label
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabButtons;
