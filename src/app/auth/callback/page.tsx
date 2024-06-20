"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import Link from "next/link";

const AuthCallbackPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Parse query parameters manually
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const error_description = params.get("error_description");

    if (error && error_description) {
      setErrorDescription(error_description.replace(/\+/g, " "));
      setModalIsOpen(true);
    }
  }, [router]);

  const closeModal = () => {
    setModalIsOpen(false);
    router.push("/auth/login");
  };

  return (
    <>
      {!errorDescription && (
        <main className="h-screen w-full flex justify-center items-center flex-col">
          <div className="text-2xl font-medium pr-2">
            You have successfully verified your email
          </div>
          <li className="">
          <Link
            href="/auth/login"
            className="hover:scale-105 transition-transform duration-300 sm:block font-bold bg-black p-2 px-4 text-white text-[12px] rounded-[12px] border fle items-center gap-2 border-[#BBBBBB] "
          >
            Login
          </Link>{" "}
        </li>
        </main>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-red-600">Error</h2>
          <p className="text-gray-700">{errorDescription}</p>
          <button
            onClick={closeModal}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AuthCallbackPage;
