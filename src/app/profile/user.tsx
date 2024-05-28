import ProfileImageUpload from "@/componet/ui/profile/ProfileImageUpload";
import { createClient } from "@/libs/supabase/client";
import { SupabaseResponse } from "@/types/supabase_res";
import Image from "next/image";
import React from "react";
interface UserProp {
  handleToggle: () => void;
  user?: any;
  getUser?: () => Promise<SupabaseResponse>;
  setAuth?: React.Dispatch<React.SetStateAction<any | null>>;
}
const user: React.FC<UserProp> = async ({ handleToggle }) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // log user to the console
  console.log("User Detail", user);

  // handleChange event for onchange method
  const handleChange = (e: React.ChangeEvent) => {};
  return (
    <div className="flex items-center justify-center my-0 sm:my-20">
      <div className="w-full sm:w-[50%] border-2 shadow-lg rounded-lg">
        <Image
          height={20}
          width={200}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707478972/utilities/Your_profile_jwvzud.svg"
          alt="rice"
          className="mx-6 sm:mx-[100px] mt-10"
        />
        <p className="mx-6 sm:mx-[100px]">Manage your account details</p>
        <div className="w-full h-[1px] mt-4 mb-4 bg-[#C7C7C7]"></div>
        <div className="flex flex-row gap-4 mx-6 sm:mx-[100px] items-center justify-center sm:justify-start ">
          {/* PROFILE IMAGE */}
          <Image
            height={20}
            width={100}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432454/utilities/profile_image_b4sbia.svg"
            alt="rice"
            className="w-32 sm:w-auto"
          />
          <ProfileImageUpload userId={user?.id as string} />
          <button className="p-2 border rounded-lg">Update</button>
          <button className="flex items-center gap-2">
            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707479658/utilities/fi-rs-trash_tga1yh.svg"
              alt="rice"
              className=""
            />
            Delete
          </button>
        </div>
        <div className="flex flex-col gap-4 mx-6 sm:mx-[100px]">
          <label htmlFor="name" className="text-[14px] -mb-2 mt-4 font-bold">
            Name
          </label>
          <input
            type="name"
            placeholder="Full Name"
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] "
            value="Joshua Ogah"
            onChange={() => {}}
          />

          <label htmlFor="email" className="text-[14px] -mb-2 mt-4 font-bold">
            Email
          </label>
          <input
            type="name"
            placeholder="Enter Your Email"
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] "
            value={`${user?.email}`}
            // value={"wilsonibekason"}
            onChange={() => {}}
          />

          <button className="p-2 font-bold bg-black rounded-lg text-white w-full sm:w-fit px-4">
            Update
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#C7C7C7] mt-10 mb-8"></div>
        <div className="mx-6 sm:mx-auto sm:w-[calc(100%-200px)] mb-20 flex flex-col items-center sm:items-start gap-4">
          <Image
            height={20}
            width={150}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707480659/utilities/Delete_account_fmobyl.svg"
            alt="rice"
            className=""
          />

          <p className="text-[#6E6E6E] text-xs sm:text-base">
            Permanently delete your account and all your content
          </p>
          <button
            className="bg-[#FF0000] rounded-lg px-[100px] w-[70%] sm:w-full flex justify-center items-center whitespace-nowrap py-4 font-bold  text-white "
            onClick={handleToggle}
          >
            Delete your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default user;
