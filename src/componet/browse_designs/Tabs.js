import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "next/image";
import Loader from "./Loader";
import LoadingDesigns from "./LoadingDesign";
import { useDesigns } from "@/hooks/useDesigns";

const pageTypes = [
  { value: "landing", label: "Landing page" },
  { value: "pricing", label: "Pricing page" },
  { value: "about", label: "About page" },
  { value: "login", label: "Login page" },
  { value: "signup", label: "Sign up page" },
  { value: "404", label: "404 page" },
];

const filterOptions = [
  { value: "landing", label: "Landing page" },
  { value: "pricing", label: "Pricing page" },
  { value: "about", label: "About page" },
  { value: "login", label: "Login page" },
  { value: "signup", label: "Sign up page" },
  { value: "404", label: "404 page" },
];

const deviceFilters = ["Desktop", "Mobile"];

const HorizontalTabs = ({ tabs, user, handleAuthModal, designs: data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [deviceFilter, setDeviceFilter] = useState(""); // Updated
  const [showMorePopupId, setShowMorePopupId] = useState(null);
  const [showBookmarkPopupId, setShowBookmarkPopupId] = useState(null);
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useDesigns();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const categoryCounts = tabs.map(({ value }) => ({
    value,
    count: data.filter((item) => item.categories.includes(value)).length,
  }));

  const filteredData = data
    .filter(
      (item) =>
        activeTab === 0 || item.categories.includes(tabs[activeTab].value)
    )
    .filter(
      (item) =>
        selectedFilters.length === 0 ||
        selectedFilters.some((filter) => item.pageType === filter)
    );
  // .filter(
  //   (item) =>
  //     selectedFilters.length === 0 ||
  //     selectedFilters.some((filter) => item.categories.includes(filter))
  // );

  const handleFilterClick = (option) => {
    if (selectedFilters.includes(option.value)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== option.value)
      );
      console.log("OPTIOPN VALUES", option);
    } else {
      setSelectedFilters([...selectedFilters, option.value]);
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

  useEffect(() => {
    loadMore();
  }, [hasNextPage, loadMore]);

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
                  <div className="custom-checkbox flex">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={selectedFilters.includes(option.value)}
                      onChange={() => handleFilterClick(option)}
                      className="mr-2 hidden"
                    />
                    <label
                      htmlFor={option.value}
                      className="checkbox-label mr-2"
                    ></label>
                  </div>

                  <label htmlFor={option.value}>{option.label}</label>
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
                {categoryCounts.find((c) => c.value === tab.value)?.count >
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
                          categoryCounts.find((c) => c.value === tab.value)
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
          {!filteredData && (
            <div>
              <Loader />
            </div>
          )}
          {filteredData.length === 0 && (
            <div className="text-sm text-slate-800">No designs found...</div>
          )}
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
      {/* {isFetchingNextPage && <div>Loading...</div>} */}
      {/* <button
        onClick={loadMore}
        disabled={!hasNextPage || isFetchingNextPage}
        className="text-xs italic disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer disabled:hidden block"
      >
        Load More
      </button> */}
    </div>
  );
};

export default HorizontalTabs;
