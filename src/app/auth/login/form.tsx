"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


function Form() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className=""
        />
      </Link>

      <div className="w-[400px]">
        <h1 className="text-center text-[22px] py-4 font-bold">
          Join Webspirre
        </h1>
        <p className="text-center text-[13px] mb-4">
          Skip the hard part. Get inspiration from the internet&apos;s <br />
          best designed and highest-converting websites
        </p>
      </div>
      <button >
        <Image
          height={20}
          width={430}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
          alt="google button"
          className=""
        />{" "}
      </button>

      <div className="flex gap-2 items-center">
        <div className="w-[200px] h-[2px] bg-[#C7C7C7]"></div>
        <p>or</p>
        <div className="w-[200px] h-[2px] bg-[#C7C7C7]"></div>
      </div>

      <form className="flex flex-col gap-4">
        {/* Email Input */}
        <label htmlFor="email" className="text-[14px] -mb-2">
          Email address
        </label>
        <input
          type="email"
          placeholder="example@mail.com"
          className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] w-[430px]"
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-[14px] -mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="**********"
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[430px]"
        />
        <Link href="/password" className="text-end text-[14px] font-bold">
          Forgot Password
        </Link>

        {/* Sign Up Button */}
        <Link
          href="/in-app"
          className="bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md"
        >
          Log in
        </Link>
      </form>

      <p className="text-[13px] text-[#64748B]">
        Don't have an account?{" "}
        <span className="font-bold text-black">
          <Link href="/auth/register"> Create an account instead</Link>
        </span>
      </p>
      <p className="text-[13px] text-[#64748B]">
        By continuing to sign up, you confirm that you agree <br /> to
        Webspirre&apos;s Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
}

export default Form;
