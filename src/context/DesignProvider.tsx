"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import type { DesignT } from "@/types/Design.type";
import { Database } from "@/types/types_db";

type Designs = Database["public"]["Tables"]["website"]["Row"];

export interface DesignContextType {
  design: Designs[] | null;
  setDesign: Dispatch<SetStateAction<Designs[] | null>>;
}

const DesignContext = createContext<DesignContextType>({
  design: null,
  setDesign: () => {},
});

interface DesignProviderProps {
  children: ReactNode;
}

export const DesignProvider = ({ children }: DesignProviderProps) => {
  const [design, setDesign] = useState<Designs[] | null>(null);

  return (
    <DesignContext.Provider value={{ design, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContext;
