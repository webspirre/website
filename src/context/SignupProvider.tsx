"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

interface EmailProviderProps {
  children: ReactNode;
}

export interface EmailContextType {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isModalOpen: boolean;
  handleOpenModal: (submittedEmail: string) => void;
  handleCloseModal: () => void;
}

const EmailContext = createContext<EmailContextType>({
  email: "",
  setEmail: () => {},
  isModalOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

export const EmailProvider = ({ children }: EmailProviderProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(() => {
    const storedModalState = localStorage.getItem("isModalOpen");
    return storedModalState === "true";
  });

  useEffect(() => {
    localStorage.setItem("isModalOpen", isModalOpen.toString());
  }, [isModalOpen]);

  const handleOpenModal = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setIsModalOpen(true);
    localStorage.setItem("email", submittedEmail);
    localStorage.setItem("isModalOpen", "true");
  };

  const handleCloseModal = () => {
    router.push("/auth/login");
    setIsModalOpen(false);
    localStorage.setItem("isModalOpen", "false");
  };
  return (
    <EmailContext.Provider
      value={{
        email,
        setEmail,
        isModalOpen,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => useContext(EmailContext);
export default EmailContext;
