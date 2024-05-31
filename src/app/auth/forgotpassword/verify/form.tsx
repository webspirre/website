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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 5) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      if (newCode[index] === "") {
        if (index > 0) {
          const prevInput = document.getElementById(`digit-${index - 1}`);
          if (prevInput) (prevInput as HTMLInputElement).focus();
        }
      } else {
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (/^\d{6}$/.test(text)) {
        setCode(text.split(""));
      } else {
        alert("Clipboard does not contain a valid 6-digit code.");
      }
    } catch (err) {
      alert("Failed to read from clipboard.");
    }
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
        {/* verification code Input */}
        <label htmlFor="email" className="text-[14px] -mb-2">
          <div className="flex w-full justify-between">
            <p className="text-[14px]">6 Digit code</p>

            {/* the button that paste codes from the clipboard  */}
            <button type="button" className="font-bold" onClick={handlePaste}>
              Paste code
            </button>

            {/* this should only show the paste code button is hidden and it should be */}
          </div>
        </label>
        {/* 6 boxes input for the user to paste the code */}
        <div className="flex w-[400px] justify-center space-x-2 mt-2">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="border p-2 w-14 rounded-lg text-center text-lg"
            />
          ))}
        </div>

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
