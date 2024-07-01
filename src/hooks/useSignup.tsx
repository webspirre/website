import { useContext, useDebugValue } from "react";
import EmailContext, { EmailContextType } from "@/context/SignupProvider";

const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  const { email, isModalOpen } = context;
  useDebugValue(email, (email) => (email ? "Email Set" : "No Email"));
  useDebugValue(isModalOpen, (isModalOpen) =>
    isModalOpen ? "Modal Open" : "Modal Closed"
  );
  return context;
};

export default useEmail;
