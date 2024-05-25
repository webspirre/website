import { useContext, useDebugValue } from "react";
import AuthContext, { AuthContextType } from "@/context/AuthProvider";
import { User } from "@/types/types";

export type AuthState = React.Dispatch<React.SetStateAction<User | null>>;

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { auth } = context;
  useDebugValue(auth, (auth) => (auth ? "Logged In" : "Logged Out"));
  return context;
};

export default useAuth;
