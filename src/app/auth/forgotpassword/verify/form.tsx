"use client";

import { handleRequest, signInWithOAuth } from "@/libs/auth-helpers/client";
import {
  resendOTP,
  signInWithPassword,
  verifyOtp,
} from "@/libs/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Form: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingR, setIsSubmittingR] = useState(false);
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
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
    setIsSubmitting(true);
    await handleRequest(e, verifyOtp, router);
    setIsSubmitting(false);
  };

  const handleResend = async () => {
    setIsSubmittingR(true);
    const formData = new FormData();
    formData.append("email", email);
    await resendOTP(formData);
    setIsSubmittingR(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const inputEvent = e.nativeEvent as InputEvent;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < code.length - 1) {
        (e.target.nextSibling as HTMLInputElement)?.focus();
      }
    } else if (
      value === "" &&
      inputEvent.inputType === "deleteContentBackward"
    ) {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      if (index > 0) {
        (e.target.previousSibling as HTMLInputElement)?.focus();
      }
    }
  };

  const handlePaste = async () => {
    const clipboardText = await navigator.clipboard.readText();
    if (/^\d{6}$/.test(clipboardText)) {
      setCode(clipboardText.split(""));
    }
  };

  const isSubmitDisabled = code.some((digit) => digit === "");

  function maskEmail(email: string) {
    const [localPart, domain] = email.split("@");

    if (!domain) {
      return email;
    }
    const localPartMasked = `${localPart.slice(0, 3)}****${localPart.slice(
      -2
    )}`;
    const [domainName, domainExtension] = domain.split(".");
    if (!domainName || !domainExtension) {
      return email;
    }

    const domainMasked = `${domainName[0]}***${domainName.slice(-1)}`;
    return `${localPartMasked}@${domainMasked}.${domainExtension}`;
  }

  const emailAddress = maskEmail(email);

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
        className="flex  w-[350px] sm:w-[350px] flex-col mx-auto md:mx-0 gap-4"
        noValidate={true}
        onSubmit={handleSubmit}
      >
        <input type="hidden" value={email} name="email" />
        <div className="flex relative mt-[40px] justify-between gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              name={"digit-" + index}
              onChange={(e) => handleInputChange(e, index)}
              className="border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[50px] text-center text-2xl"
            />
          ))}
          <button
            type="button"
            onClick={handlePaste}
            className="border flex items-center gap-1 absolute border-[#C7C7C7] bg-black text-white px-2 py-1 rounded-md right-0 -top-[50px] text-center text-[14px]"
          >
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1719239754/utilities/webspirre/paste_1_ubbhr6.png"
              alt="paste"
              height={18}
              width={18}
            />
            Paste{" "}
          </button>
        </div>

        <button
          type="submit"
          className="bg-black text-center w-full text-white font-bold p-2 py-4 mt-2 rounded-md"
          disabled={isSubmitDisabled}
        >
          {!isSubmitting ? "Verify code" : "Verifying code..."}
        </button>
      </form>
      <form onSubmit={handleResend}>
        <input type="hidden" value={email} name="email" />
        <button
          type="button"
          className="text-center w-full text-black font-bold p-2 py-4 mt-2 rounded-md"
        >
          {!isSubmittingR ? "Resend code" : "Resending code..."}
        </button>
      </form>
    </div>
  );
};

export default Form;
