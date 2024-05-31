"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { signInWithPassword } from "@/libs/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form: React.FC = () => {
  const redirectMethod = "client";
  const router = redirectMethod === "client" ? useRouter() : null;
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // submit logic
  };

 

 

  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className="hidden sm:block mb-[36px]"
        />
      </Link>

      <div className="w-[400px]">
        <div className="relative">
          <Link href="/auth/login" className="flex absolute bottom-[20px]">
            <Image
              height={20}
              width={16}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1717142604/utilities/webspirre/Vector_9_auopfm.svg"
              alt="left"
              className=""
            />
          </Link>
          <h1 className="text-center text-[24px] py-4 font-bold">
            Recover password
          </h1>
        </div>

        <p className="text-center text-[12px] mb-4">
          A 6 digit code has been sent to{" "}
          <span className="font-bold">jos****ah@g***l.com,</span> enter the code
          to verify.
        </p>
      </div>

      <form
        className="flex sm:w-[400px] flex-col mx-auto md:mx-0 gap-4"
        noValidate={true}
        onSubmit={handleSubmit}
      >
        {/* Password Input */}
        <label htmlFor="password" className="text-[14px] -mb-2">
          New Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="**********"
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[350px] md:w-[430px]"
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-[14px] -mb-2">
          Confirm new password{" "}
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="**********"
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[350px] md:w-[430px]"
        />
        {/* Get code Button */}
        {/*         
        <button
          type="submit"
          className="bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md"
        >
          Get code
        </button> */}
        <Link
          href="/auth/forgotpassword/newpassword"
          type="submit"
          className="bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md"
        >
          Get code
        </Link>
      </form>
    </div>
  );
};

export default Form;
