"use client";

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SignUpModal from "../modals/SignUpModal";
import { useRouter } from "next/navigation";
import { formatEmail } from "@/hooks/functions/useEmailFormats";
interface ConfirmLayoutProps {
  user: User | null;
}
const ConfirmLayout: React.FC<ConfirmLayoutProps> = ({ user }) => {
  const router = useRouter();
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState("");

  const handleCloseModal = () => {
    router.push("/auth/login");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("newemail");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  // const modalOpenRef = useRef<boolean>(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const isModalOpen = localStorage.getItem("isModalOpen");
  //     if (isModalOpen) {
  //       modalOpenRef.current = isModalOpen === "true";
  //     }
  //   }
  // }, []);
  return (
    <>
      <SignUpModal
        open={isModalOpen}
        onClose={() => handleCloseModal}
        email={email}
      />
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "430px",
          position: "relative",
        }}
        className="max-w-screen-xl mx-auto items-center justify-center text-center flex-col flex gap-y-3 h-screen"
      >
        <h1 className="text-xl sm:text-5xl">
          Thanks for signing up on <span className="font-black">Webspirre</span>
        </h1>
        <p className="italic font-semibold text-sm sm:text-lg">
          Please, confirm the email sent to your email{" "}
          <span className="font-bold"> {formatEmail(email)}</span>. to proceed
          to loginin
        </p>

        <Link
          href="/auth/login"
          className=" hidden hover:scale-105 transition-transform duration-300 sm:block font-bold bg-black p-3.5 px-5 whitespace-nowrap text-white text-[12px] rounded-[12px] border fle items-center gap-2 border-[#BBBBBB] "
        >
          Login in
        </Link>
      </div>
    </>
  );
};

export default ConfirmLayout;
