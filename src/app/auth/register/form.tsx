"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { signUp } from "@/libs/auth-helpers/server";
import { createPublicClient } from "@/libs/supabase/client";
// import { supabaseBrowser } from "@/libs/supabase/browser";
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

  const handleLoginWithOAuth = (provider: "google") => {
    const supabase = createPublicClient();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };
  return (
    <div className="flex flex-col text-[12px]  items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className="hidden sm:block "
        />{" "}
      </Link>

      <div className="w-[400px]">
        <h1 className="text-center text-[20px] py-2 font-bold">
          Join Webspirre
        </h1>
        <p className="text-center mb-4">
          Skip the hard part. Get inspiration from the internet&apos;s <br />{" "}
          best designed and highest-converting websites{" "}
        </p>
      </div>
      <button onClick={() => handleLoginWithOAuth("google")} className="hidden">
        <Image
          height={20}
          width={330}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
          alt="google button"
          className=""
        />
      </button>
      {/* HIDDEN */}
      <form onSubmit={(e) => handleOAuthSubmit(e)}>
        <input type="hidden" name="provider" value={"google"} />
        <button type="submit" className="hidden">
          <Image
            height={20}
            width={430}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
            alt="google button"
            className=""
          />{" "}
        </button>
      </form>

      <div className="fle gap-2 items-center hidden">
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
        <button
          type="submit"
          className="bg-black text-center w-[350px] text-white font-bold p-2 py-4 mt-2 rounded-md disabled:bg-opacity-35 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="loader"></div> {/* Add a loader here */}
              <span className="ml-2">Signing up...</span> {/* Loading text */}
            </div>
          ) : (
            "Sign up"
          )}
        </button>
      </form>

      <p className="text-[13px] text-[#64748B]">
        Already have an account?{" "}
        <span className="font-bold text-black">
          <Link href="/auth/login">Log in instead</Link>
        </span>
      </p>
      <p className="text-[13px] text-[#64748B]">
        By continuing to sign up, you confirm that you agree <br /> to
        Webspirre&apos;s{" "}
        <span className=" border-b-2 w-fit">
          {" "}
          <Link href="/terms">Terms & Conditions</Link>{" "}
        </span>{" "}
        and{" "}
        <span className=" border-b-2 w-fit">
          {" "}
          <Link href="/policy">Privacy Policy</Link>
        </span>{" "}
        .
      </p>
    </div>
  );
}

export default Form;
