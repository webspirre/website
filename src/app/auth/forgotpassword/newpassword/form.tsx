"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import { updatePassword } from "@/libs/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  function maskEmail(email: string) {
    const [localPart, domain] = email.split("@");
    const localPartMasked = `${localPart.slice(0, 3)}****${localPart.slice(
      -2
    )}`;
    const [domainName, domainExtension] = domain.split(".");
    const domainMasked = `${domainName[0]}***${domainName.slice(-1)}`;
    return `${localPartMasked}@${domainMasked}.${domainExtension}`;
  }

  const emailAddress = maskEmail(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
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
          className="hidden sm:block mb-[36px]"
        />
      </Link>

      <div className="w-[400px]">
        <div className="relative">
          <Link href="/auth/login" className="flex absolute bottom-[30px]">
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
          <span className="font-bold">{emailAddress},</span> enter the code to
          verify.
        </p>
      </div>

      <form
        className="flex sm:w-[350px] flex-col mx-auto md:mx-0 gap-4"
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
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[350px] md:w-[350px]"
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-[14px] -mb-2">
          Confirm new password{" "}
        </label>
        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          autoComplete="current-password"
          placeholder="**********"
          className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[350px] md:w-[350px]"
        />
        {/* Get code Button */}
        <button
          type="submit"
          className="bg-black text-center w-[350px] text-white font-bold p-2 py-4 mt-2 rounded-md"
        >
          {!isSubmitting ? " Save" : "Saving password..."}
        </button>
      </form>
    </div>
  );
};

export default Form;
