"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { signInWithPassword } from "@/libs/auth-helpers/server";
import { supabaseBrowser } from "@/libs/supabase/browser";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");
    if (error && errorDescription) {
      setErrorMessage(decodeURIComponent(errorDescription));
      toast.error(decodeURIComponent(errorDescription), {
        position: "top-center",
      });
    }
  }, [searchParams]);

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

  const handleLoginWithOAuth = (provider: "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col text-[12px] sm:mt-[50px] mt-[50px] items-center justify-center gap-4">
      <Link href="/">
        <Image
          height={20}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
          alt="left"
          className="hidde sm:block"
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
      <button onClick={() => handleLoginWithOAuth("google")} className="">
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
            width={330}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707163747/utilities/Frame_49_ucklyh.svg"
            alt="google button"
            className=""
          />{" "}
        </button>
      </form>

      <div className="fle gap-2 items-center hidden">
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
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[50px] w-[320px] sm:w-[350px]"
          />
          {/* Error message */}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-[14px] -mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              placeholder="**********"
              className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[50px] w-[320px] md:w-[350px] pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-4"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                style={{ color: "#6B7280" }}
              />
            </button>
            {/* <button
              type="button"
              className="absolute right-8 top-3"
              onClick={() => setShowPassword(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button> */}
          </div>
          {/* Error message */}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <Link
            href="/auth/forgotpassword"
            className="text-end text-[14px] font-bold"
          >
            Forgot Password
          </Link>
        </div>

        {/*  Login Button */}
        <button
          type="submit"
          className="bg-black text-center w-[320px] sm:w-[350px] text-white font-bold p-2 py-4 mt-2 rounded-md disabled:bg-opacity-35 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="loader"></div> {/* Add a loader here */}
              <span className="ml-2">Logging in...</span> {/* Loading text */}
            </div>
          ) : (
            "Log in"
          )}
        </button>
      </form>

      <p className="text-[13px] text-[#64748B]">
        Don't have an account?{" "}
        <span className="font-bold text-black">
          <Link href="/auth/register"> Create an account instead</Link>
        </span>
      </p>
      <p className="text-[13px] sm:w-[350px] w-[320px] text-[#64748B]">
        By continuing to sign up, you confirm that you agree{" "}
        <br className="hidden sm:block" /> to Webspirre&apos;s{" "}
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
