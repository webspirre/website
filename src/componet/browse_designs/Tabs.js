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
    <div>
      {/* Device Filters */}
      {deviceFilters.map((device, index) => (
        <button
          key={index}
          onClick={() => setDeviceFilter(device)}
          className={`px-4 py-2 border-b-2 ${
            deviceFilter === device
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500"
          }`}
        >
          {device}
        </button>
      ))}
      <div className="flex items-center mb-4">
        {/* Dropdown Button */}
        <div className="relative mr-4">
          <button
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className="border border-gray-300 p-1 rounded-md"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F1F0EE] rounded-full">
              <Image
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705965289/utilities/Vector_dlval9.svg"
                width={20}
                height={50}
                alt="design"
              />
              <p className="font-bold text-[16px]">Filter</p>
            </div>
          </button>
          {/* Filter Options */}
          {showFilterOptions && (
            <div className="absolute top-8 right-0 bg-white border border-gray-300 p-2 mt-4 rounded-md shadow-md">
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

        {/* Tabs */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 py-2 border-b-2 ${
              activeTab === index
                ? "border-2 rounded-full bg-black text-white font-bold"
                : "border-2 rounded-full mx-1 text-gray-500 hover:text-gray-700 font hover:border-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {filteredData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTabs;
