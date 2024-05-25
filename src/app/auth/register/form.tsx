"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { signUp } from "@/libs/auth-helpers/server";
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
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };

  const handleOAuthSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className="hidden sm:block"
        />{" "}
      </Link>

      <div className="w-[400px]">
        <h1 className="text-center text-[22px] py-4 font-bold">
          Join Webspirre
        </h1>
        <p className="text-center text-[13px] mb-4">
          Skip the hard part. Get inspiration from the internet&apos;s <br />{" "}
          best designed and highest-converting websites{" "}
        </p>
      </div>

      <form onSubmit={(e) => handleOAuthSubmit(e)}>
        <input type="hidden" name="provider" value={"google"} />
        <button>
          <Image
            height={20}
            width={430}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
            alt="google button"
            className=""
          />{" "}
        </button>
      </form>

      <div className="flex gap-2 items-center">
        <div className="w-[150px] sm:w-[200px] h-[1px] sm:h-[2px]  bg-[#C7C7C7]"></div>
        <p>or</p>
        <div className="w-[150px] sm:w-[200px] h-[1px] sm:h-[2px] bg-[#C7C7C7]"></div>
      </div>

      <form
        className="flex flex-col mx-auto md:mx-0 gap-4"
        noValidate={true}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Email Input */}
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
          className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] w-[350px] md:w-[430px]"
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-[14px] -mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          //  placeholder="6+ Characters, 1 Capital letter"
          placeholder="**********"
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[350px] md:w-[430px]"
        />

        {/* Sign Up Button */}
        <button className="bg-black text-white font-bold p-2 py-4 mt-2 rounded-md">
          Sign Up
        </button>
      </form>

      <p className="text-[13px] text-[#64748B]">
        Already have an account?
        <span className="font-bold text-black">
          <Link href="/auth/login">Log in instead</Link>
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
