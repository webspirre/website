"use client";

import { handleRequest } from "@/libs/auth-helpers/client";
import { requestPasswordUpdate } from "@/libs/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, requestPasswordUpdate, router);
    setIsSubmitting(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    localStorage.setItem("email", email); // Store email in localStorage
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
              className=" "
            />
          </Link>
          <h1 className="text-center text-[24px] py-4 font-bold">
            Recover password
          </h1>
        </div>

        <p className="text-center text-[12px] mb-4">
          Enter your email address to recover your password.
        </p>
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
          className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] w-[350px] sm:w-[430px]"
          value={email}
          onChange={handleEmailChange} // Handle change event
        />

        {/* Get code Button */}
        <button
          type="submit"
          className="bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md disabled:cursor-not-allowed"
          disabled={[!email].every(Boolean) as boolean}
        >
          {!isSubmitting ? "Get code" : "Getting Code..."}
        </button>
      </form>
    </div>
  );
};

export default Form;
