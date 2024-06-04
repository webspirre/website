"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { signInWithPassword } from "@/libs/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Form() {
  let redirectMethod = "client";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  const handleOAuthSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col text-[12px] mt-[23px]  items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className="hidden sm:block"
        />
      </Link>

      <div className="w-[400px]">
        <h1 className="text-center text-[20px] py-4 font-bold">
          Join Webspirre
        </h1>
        <p className="text-center mb-4">
          Skip the hard part. Get inspiration from the internet&apos;s <br />
          best designed and highest-converting websites
        </p>
      </div>
      <form onSubmit={(e) => handleOAuthSubmit(e)}>
        <input type="hidden" name="provider" value={"google"} />
        <button type="submit">
          <Image
            height={20}
            width={330}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
            alt="google button"
            className=""
          />{" "}
        </button>
      </form>

      <div className="flex gap-2 items-center">
        <div className="w-[150px] sm:w-[150px] h-[1px] sm:h-[2px] bg-[#C7C7C7]"></div>
        <p>or</p>
        <div className="w-[150px] sm:w-[150px] h-[1px] sm:h-[2px] bg-[#C7C7C7]"></div>
      </div>

      <form
        className="flex flex-col justify-center items-center mx-auto md:mx-0 gap-4"
        noValidate={true}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[14px] -mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            placeholder="example@mail.com"
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[50px] w-[350px] sm:w-[350px]"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-[14px] -mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="**********"
            className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[50px] w-[350px] md:w-[350px]"
          />

          <Link
            href="/auth/forgotpassword"
            className="text-end text-[14px] font-bold"
          >
            Forgot Password
          </Link>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="bg-black text-center w-[350px] text-white font-bold p-2 py-4 mt-2 rounded-md"
        >
          Log in
        </button>
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
