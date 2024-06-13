import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "next/image";

const HorizontalTabs = ({ tabs, user, handleAuthModal, designs: data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [deviceFilter, setDeviceFilter] = useState(""); // Updated
  const [showMorePopupId, setShowMorePopupId] = useState(null);
  const [showBookmarkPopupId, setShowBookmarkPopupId] = useState(null);

  const filterOptions = [
    "Landing Page",
    "Pricing Page",
    "About Page",
    "Login Page",
    "Sign Up Page",
    "404 Page",
  ];

  const deviceFilters = ["Desktop", "Mobile"];

  const categoryCounts = tabs.map(({ value }) => ({
    value,
    count: data.filter((item) => item.categories[0] === value).length,
  }));

  const filteredData = data
    .filter(
      (item) => activeTab === 0 || item.categories[0] === tabs[activeTab].value
    )
    .filter(
      (item) =>
        selectedFilters.length === 0 || selectedFilters.includes(item.categories[0])
    );

  const handleFilterClick = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  useEffect(() => {
    setShowFilterOptions(false);
  }, [selectedFilters]);

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".popup") &&
      !event.target.closest(".more-button") &&
      !event.target.closest(".bookmark-button")
    ) {
      setShowMorePopupId(null);
      setShowBookmarkPopupId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // console.log("DESIGNS", designs);

  return (
    <div className="mb-4">
      {/* Device Filters */}
      {deviceFilters.map((device, index) => (
        <button
          key={index}
          onClick={() => setDeviceFilter(device)}
          className={`mr-4 px-2 py-2 mb-4 border-b-2 text-[14px] ${
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
          <button onClick={() => setShowFilterOptions(!showFilterOptions)}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-fit p-4 py-2 bg-[#F1F0EE] rounded-full">
                <Image
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705965289/utilities/Vector_dlval9.svg"
                  width={15}
                  height={30}
                  alt="design"
                />
                <p className="font-bold text-center text-[14px]">Filter</p>
              </div>
              <div className="h-[30px] mr-4 min-w-[1px] bg-[#BDBDBD]"></div>
            </div>
          </button>

          {showFilterOptions && (
            <div className="absolute top-8 w-[150px] text-[12px] bg-white border border-gray-300 p-2 mt-4 rounded-md shadow-md">
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
            className="flex gap-2 custom-scrollbar w-[500pc]"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-1 border-b-2 mr-2 w-fit ${
                  activeTab === index
                    ? "border-2 rounded-full bg-black font-medium text-white text-[12px]"
                    : "border-2 text-[12px] rounded-full text-black hover:text-gray-700 hover:border-gray-500"
                }`}
              >
                {categoryCounts.find((c) => c.label === tab.label)?.count >
                0 ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <div>{tab.label}</div>
                      <div
                        className={`bg-[#F3F4F6] rounded-full p-1 text-[12px] ${
                          activeTab === index
                            ? "rounded-full bg-[#F3F4F6] text-black"
                            : "rounded-full text-black hover:text-gray-700 hover:border-gray-500"
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

      <div className="flex justify-center">
        <div className="mt-6 w-full sm:px-4">
          {!filteredData && <p>Loading Designs...</p>}
          {filteredData.length === 0 && <p>Loading Designs...</p>}
          <div
            className={`grid grid-cols-1 gap-4  ${
              deviceFilter === "Mobile"
                ? "sm:grid-cols-5 grid-cols-1"
                : "sm:grid-cols-4"
            }`}
          >
            {filteredData.map((item) => (
              <Card
                key={item.id}
                {...item}
                deviceFilter={deviceFilter}
                showMorePopupId={showMorePopupId}
                setShowMorePopupId={setShowMorePopupId}
                showBookmarkPopupId={showBookmarkPopupId}
                setShowBookmarkPopupId={setShowBookmarkPopupId}
                user={user}
                handleAuthModal={handleAuthModal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTabs;
