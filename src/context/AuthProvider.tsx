"use client";

import { UserMetadata } from "@/types/types";
import { Session, User } from "@supabase/supabase-js";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export interface AuthContextType {
  auth: User | null;
  setAuth: Dispatch<SetStateAction<User | null>>;
  setAuthUser: Dispatch<SetStateAction<UserMetadata | null>>;
  authUser: UserMetadata | null;
}

const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
  authUser: null,
  setAuthUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<User | null>(null);
  const [authUser, setAuthUser] = useState<UserMetadata | null>(null);

  useEffect(() => {
    const storedUserDataString =
      typeof window !== "undefined"
        ? localStorage.getItem("sb-nawqzhetlcutvfqhyjsv-auth-token")
        : null;

    if (storedUserDataString) {
      const parsedUserData = JSON.parse(storedUserDataString);
      console.log("parsedUserData", parsedUserData);
      // @ts-ignore
      setAuth((prev: User | null) => {
        // console.log(JSON.stringify(prev));
        return {
          ...prev,
          ...parsedUserData,
        };
      });

      // Set authUser state
      setAuthUser(parsedUserData.user);
    }

    console.log("storedUser Auth", auth);
    console.log("storedUser AuthUser", authUser);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
