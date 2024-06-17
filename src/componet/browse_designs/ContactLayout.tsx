"use client";

import React, { useEffect, useState } from "react";
import type { User } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import Select, { ActionMeta, MultiValue } from "react-select";
import { createClient } from "../../libs/supabase/client";
import toast from "react-hot-toast";

interface ContactLayoutProps {
  user: User | null;
}
const pageTypes_: Option[] = [
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "frontend", label: "Front-End Development" },
  { value: "backend", label: "Back-End Development" },
  { value: "graphic", label: "Graphic Design" },
  { value: "content", label: "Content Creation" },
  { value: "seo", label: "SEO Optimization" },
  { value: "ecommerce", label: "E-commerce Development" },
  { value: "web-app", label: "Web Application Development" },
  { value: "maintenance", label: "Website Maintenance" },
  { value: "digital-marketing", label: "Digital Marketing" },
];

interface Option {
  value: string;
  label: string;
}
interface Map {
  [key: string]: string | string[] | undefined | Option | Option[];
}
const initialFormData: Map = {
  email: "",
  enquiry: "",
  department: "",
  pageType: "",
  subject: "",
};
const socialData = [
  {
    name: "",
    link: "",
    icon: "https://res.cloudinary.com/dwqantex4/image/upload/v1718634343/image_13_mz9ugq.png",
  },
  {
    name: "",
    link: "",
    icon: "https://res.cloudinary.com/dwqantex4/image/upload/v1718634343/image_14_whkikq.png",
  },
  {
    name: "",
    link: "",
    icon: "https://res.cloudinary.com/dwqantex4/image/upload/v1718634343/image_15_eem3al.png",
  },
  {
    name: "",
    link: "",
    icon: "https://res.cloudinary.com/dwqantex4/image/upload/v1718634343/image_16_fwr9zg.png",
  },
];
const ContactLayout: React.FC<ContactLayoutProps> = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supabase = createClient();

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }

    const savedPageType = localStorage.getItem("selectedPageType");
    if (savedPageType) {
      setSelectedOption(JSON.parse(savedPageType));
    }
  }, []);
  // Function to handle page type change
  const handleChangePageType = (selectedOption: Option | null) => {
    // if (selectedOption) {
    //   setFormData({ ...formData, pageType: selectedOption.value });
    //   setSelectedOption(selectedOption);
    // }
    if (selectedOption) {
      const newFormData = {
        ...formData,
        department: selectedOption.value,
      };
      setFormData(newFormData);
      setSelectedOption(selectedOption);
      localStorage.setItem("formData", JSON.stringify(newFormData));
      localStorage.setItem("selectedPageType", JSON.stringify(selectedOption));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    localStorage.setItem("formData", JSON.stringify(newFormData));
  };
  const addContactHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Set loading state to true

    try {
      const { subject, department, enquiry, email } = formData;

      const { data, error } = await supabase
        .from("cta")
        .insert([{ subject,  department, enquiry, email }])
        .select();

      // Handle errors
      if (error) {
        console.error("Error inserting data into Supabase:", error.message);
        toast.error("Error creating enquiry.", { duration: 3000 });
        return;
      }
      // Handle success
      console.log("Data inserted into Supabase:", data);
      setFormData(initialFormData); // Clear the form fields after successful submission
      localStorage.removeItem("formData");
      localStorage.removeItem("selectedPageType");
      toast.success("enquiry created successfully!", { duration: 3000 });
      // @ts-ignore
      setSelectedOption(null); // Clear selected page type
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred.", { duration: 3000 });
    } finally {
      setIsSubmitting(false); // Set loading state to false after request completes
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-5 sm:pt-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 p-4">
            <Image
              src={
                "https://res.cloudinary.com/dwqantex4/image/upload/v1718540486/Group_45_g7ckdx.png"
              }
              alt="logo"
              width={400}
              height={400}
              className=""
            />
            <p className="pl-5 text-sm mt-1">
              We want to hear your concerns and suggestions.
            </p>
            <div className="bg-black text-white text-xs p-3 rounded-xl w-full sm:w-[300px] flex flex-col gap-y-3 mt-5 sm:mt-8 ml-5">
              <div className="flex flex-row space-x-2 items-center">
                <Image
                  src={
                    "https://res.cloudinary.com/dwqantex4/image/upload/v1718634345/fi_mail_zmwmx7.png"
                  }
                  alt="logo"
                  width={20}
                  height={20}
                  className=""
                />
                <div className="flex flex-col">
                  <p className="font-bold">Email</p>
                  <Link href="mailto:webspirre@gmail.com">
                    webspirre@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex flex-row space-x-2 items-center">
                <Image
                  src={
                    "https://res.cloudinary.com/dwqantex4/image/upload/v1718634343/Phone_light_uzvsqo.png"
                  }
                  alt="logo"
                  width={20}
                  height={20}
                  className=""
                />
                <div className="flex flex-col">
                  <p className="font-bold">Mobile</p>
                  <p>+234 8057284454</p>
                </div>
              </div>

              <div className="flex space-x-2 mt-5 sm:mt-10">
                {socialData.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <Image
                      src={item.icon}
                      alt="logo"
                      width={20}
                      height={20}
                      className=""
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 p-8 border-2 border-slate-300 rounded-xl shadow-md">
            <h1 className="text-[24px] font-black">Contact Form</h1>
            <p className="text-xs">
              Complete the form with your enquiry and we will respond shortly.
            </p>
            <form
              className="flex flex-col gap-4 mt-4"
              noValidate={true}
              onSubmit={addContactHandler}
            >
              {/* Department Field */}
              <div>
                <h2 className="text-xs mb-1.5">Department</h2>
                <Select
                  name="department"
                  value={selectedOption}
                  onChange={handleChangePageType}
                  options={pageTypes_}
                  placeholder="Select..."
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      height: "40px",
                      width: "100%",
                      fontSize: "12px",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "#007bff" : "white",
                      color: state.isSelected ? "white" : "black",
                      fontSize: "10px",
                    }),
                  }}
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  placeholder="Your email address"
                  className="border border-[#C7C7C7] placeholder:text-sm text-sm bg-white p-2 rounded-md h-[50px]"
                  value={formData.email as string}
                  onChange={handleChange}
                />
              </div>
              {/* Subject Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="text" className="text-xs mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  autoComplete="current-password"
                  placeholder="Your subject"
                  className="border border-[#C7C7C7] placeholder:text-sm text-sm bg-white p-2 rounded-md h-[50px]"
                  value={formData.subject as string}
                  onChange={handleChange}
                />
              </div>
              {/* Enquires Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs mb-1.5">
                  Your enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  placeholder="Type"
                  className="border border-[#C7C7C7] placeholder:text-sm text-sm bg-white p-2 rounded-md h-[150px]"
                  rows={4}
                  cols={50}
                  value={formData.enquiry as string}
                  onChange={handleChange}
                />
              </div>
              {/* Sign Up Button */}
              <button
                type="submit"
                className="bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md disabled:bg-opacity-35 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="loader"></div> {/* Add a loader here */}
                    <span className="ml-2">Saving...</span> {/* Loading text */}
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactLayout;
