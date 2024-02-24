"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";
import FileUpload from "./FileUpload";
import { addWebsite } from "../../../../actions/actions";

const categories = [
  "AI",
  "Fintech",
  "Marketplace",
  "E-commerce",
  "Crypto & Web 3",
  "Software & SaaS",
  "Travel & Hospitality",
  "Agency & Corporate",
];
const pageTypes = [
  "Landing page",
  "Pricing page",
  "About page",
  "Login page",
  "Sign up page",
  "404 page",
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    webURL: "",
    category: "",
    pageType: "",
    shortDescription: "",
    longDescription: "",
    logoImageURL: "",
    desktopSsURL: "",
    mobileSsURL: "",
    desktopFpURL: "",
    mobileFpURL: "",
    date: new Date().toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    }),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedPageTypes1, setSelectedPageTypes1] = useState<string[]>([]);
  const dropdownRef1 = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  
 

  

  const handlePageTypeChange1 = (pageType: string) => {
    if (selectedPageTypes1.includes(pageType)) {
      setSelectedPageTypes1(
        selectedPageTypes1.filter((type) => type !== pageType)
      );
    } else {
      setSelectedPageTypes1([...selectedPageTypes1, pageType]);
    }
  };

  

  

  useEffect(() => {
    const currentDate = new Date().toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: currentDate,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (file: File, type: string) => {
    setFormData({
      ...formData,
      [type]: file,
    });
  };

 
  const addWebsiteHandler = async (formData: any) => {
    await addWebsite(formData);
  };

  

  return (
    <div className="p-4 rounded-[20px] w-full m-4 bg-white">
      <div className="border-b">
        <p className="py-4 border-b-4 border-black w-fit px-2">
          Upload details
        </p>
      </div>
      <form action={addWebsiteHandler}>
        <div className="grid grid-cols-2 gap-20 w-full">
          <div className=" ">
            <div className="w-full py-8">
              <label htmlFor="name">Name of website</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="border-2 rounded-lg p-4 w-full"
              />
            </div>
            <div className="w-full py-8">
              <label htmlFor="webURL">URL of website</label>

              <input
                type="text"
                name="webURL"
                placeholder="Website URL"
                onChange={handleChange}
                className="border-2 rounded-lg p-4 w-full"
              />
            </div>

            {/* categoris */}
            <div className="py-8">
              <label htmlFor="category">Category</label>

              <div className="w-full py-4 border rounded-md justify-between flex items-center px-4  border-gray-300">
                <label htmlFor="category" className="text-[gray]">
                  Select
                </label>
                <div
                  ref={dropdownRef}
                  className="relative inline-block text-left "
                >
                  <div>
                    <span className="rounded-md shadow-sm">
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded={isOpen ? "true" : "false"}
                      >
                        <Image
                          height={20}
                          width={20}
                          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1708133810/utilities/fi_chevron-down_yid0fo.svg"
                          alt="rice"
                          className="rounded-lg"
                        />{" "}
                      </button>
                    </span>
                  </div>
                  {isOpen && (
                    <div
                      className="origin-top-right absolute z-10 right-0 mt-6 w-[500px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        {categories.map((category) => (
                          <label
                            key={category}
                            className="flex items-center py-2 px-4"
                          >
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-blue-600"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full py-8">
              <label htmlFor="pageType">Page type</label>
              <div className="w-full py-4 border rounded-md justify-between flex items-center px-4  border-gray-300">
                <label htmlFor="pageType" className="text-[gray]">
                  Select
                </label>
                <div
                  ref={dropdownRef}
                  className="relative inline-block text-left "
                >
                  <div className="relative inline-block text-left">
                    <div>
                      <span className="rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => setIsOpen1(!isOpen1)}
                          className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded={isOpen ? "true" : "false"}
                        >
                          <Image
                            height={20}
                            width={20}
                            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1708133810/utilities/fi_chevron-down_yid0fo.svg"
                            alt="rice"
                            className="rounded-lg"
                          />{" "}
                        </button>
                      </span>
                    </div>
                    {isOpen1 && (
                      <div
                        className="origin-top-right absolute right-0 mt-6 w-[500px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          {pageTypes.map((pageType) => (
                            <label
                              key={pageType}
                              className="flex items-center py-2 px-4"
                            >
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={selectedPageTypes1.includes(pageType)}
                                onChange={() => handlePageTypeChange1(pageType)}
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                {pageType}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-8">
              <label htmlFor="shortDescription">Short Discription</label>

              <textarea
                name="shortDescription"
                placeholder="Short Description"
                onChange={handleChange}
                className="border-2 rounded-lg p-4 w-full"
              />
            </div>
            <div className="w-full py-8">
              <label htmlFor="longDescription">Long description</label>

              <textarea
                name="longDescription"
                placeholder="Long Description"
                onChange={handleChange}
                className="border-2 rounded-lg p-4 w-full"
              />
            </div>
          </div>
          <div className="">
            <div>
              <FileUpload
                label="Logo"
                onFileChange={(file) => handleFileChange(file, "logo")}
              />
              <FileUpload
                label="Desktop screenshot"
                onFileChange={(file) => handleFileChange(file, "desktopSs")}
              />
              <FileUpload
                label="Mobile screenshot"
                onFileChange={(file) => handleFileChange(file, "mobileSs")}
              />
              <FileUpload
                label="Desktop full page"
                onFileChange={(file) => handleFileChange(file, "desktopFp")}
              />
              <FileUpload
                label="Mobile full page"
                onFileChange={(file) => handleFileChange(file, "mobileFp")}
              />
            </div>
            <div className="w-full py-8">
              <label htmlFor="date">Date updated</label>
              <input
                type="text"
                name="date"
                placeholder="Date updated"
                value={formData.date}
                onChange={handleChange}
                className="border-2 rounded-lg p-4 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end m-4">
          <button
            type="submit"
            className="bg-black text-white px-[50px] py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
