import { useContext, useDebugValue } from "react";
import DesignContext, { DesignContextType } from "@/context/DesignProvider";

const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  const { design } = context;
  useDebugValue(design, (design) => (design ? "Design Loaded" : "No Design"));
  return context;
};

export default useDesign;
