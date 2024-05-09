// HorizontalTabs.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "next/image";

const HorizontalTabs = ({ tabs, data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [deviceFilter, setDeviceFilter] = useState("");

  const filterOptions = [
    "Landing Page",
    "Pricing Page",
    "About Page",
    "Login Page",
    "Sign Up Page",
    "404 Page",
  ];

  const deviceFilters = ["Desktop", "Mobile"];

  // Calculate the count for each category
  const categoryCounts = tabs.map(({ label }) => ({
    label,
    count: data.filter((item) => item.category === label).length,
  }));

  const filteredData = data
    .filter(
      (item) => activeTab === 0 || item.category === tabs[activeTab].label
    )
    .filter(
      (item) =>
        selectedFilters.length === 0 || selectedFilters.includes(item.category)
    )
    .filter((item) => deviceFilter === "" || item.deviceType === deviceFilter);

  const handleFilterClick = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  useEffect(() => {
    // Close filter options when a filter is selected
    setShowFilterOptions(false);
  }, [selectedFilters]);

  return (
    <div className="mb-4">
      {/* Device Filters  sm:max-w-[1320px] mx-auto w-full */}
      {deviceFilters.map((device, index) => (
        <button
          key={index}
          onClick={() => setDeviceFilter(device)}
          className={`pr-4 py-2 mb-4 border-b-2 ${
            deviceFilter === device
              ? "border-gray-500 text-gray-700"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500"
          }`}
        >
          {device}
        </button>
      ))}
      <div className="flex">
        <div className="mr-2 relative z-10">
          <button
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className=""
          >
            <div className="flex  items-center gap-4">
              <div className="flex items-center gap-2 min-w-fit p-4 py-2 bg-[#F1F0EE] rounded-full">
                <Image
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705965289/utilities/Vector_dlval9.svg"
                  width={20}
                  height={50}
                  alt="design"
                />
                <p className="font-bold text-center text-[16px]">Filter</p>
              </div>
              <div className="h-[40px] mr-4 min-w-[1px] bg-[#BDBDBD]"> </div>
            </div>
          </button>

          {/* Filter Options */}
          {showFilterOptions && (
            <div className="absolute top-8 w-[150px] text-[14px] font-medium bg-white border border-gray-300 p-2 mt-4 rounded-md shadow-md">
              {filterOptions.map((option, index) => (
                <div key={index} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={option}
                    checked={selectedFilters.includes(option)}
                    onChange={() => handleFilterClick(option)}
                    className="mr-2 "
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
            className="flex gap-2 custom-scrollbar w-[500pc]"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none", // Hide the scrollbar for Firefox
            }}
          >
            {/* Dropdown Button */}

            {/* Tabs */}
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 border-b-2 mr-2 w-fit  ${
                  activeTab === index
                    ? "border-2 rounded-full bg-black text-white font-medium"
                    : "border-2 text-[16px] rounded-full  text-black hover:text-gray-700 font-medium hover:border-gray-500"
                }`}
              >
                {categoryCounts.find((c) => c.label === tab.label)?.count >
                0 ? (
                  <>
                    <div className="flex gap-2 items-center ">
                      <div>{tab.label}</div>

                      <div
                        className={`bg-[#F3F4F6] rounded-full p-1 text-[12px] ${
                          activeTab === index
                            ? "rounded-full bg-[#F3F4F6] text-black"
                            : "rounded-full  text-black hover:text-gray-700  hover:border-gray-500"
                        }`}
                      >
                        {
                          categoryCounts.find((c) => c.label === tab.label)
                            ?.count
                        }
                      </div>
                    </div>
                  </>
                ) : (
                  tab.label
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex justify-center">
        <div className="  mt-4 w-full sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTabs;
