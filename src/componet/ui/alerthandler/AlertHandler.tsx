"use client";

// src/components/AlertHandler.tsx
import { useEffect } from "react";
import { getQueryParams } from "../../../utils/queryParams";
import toast from "react-hot-toast";

const AlertHandler: React.FC = () => {
  useEffect(() => {
    const { status, statusDescription, error, errorDescription } =
      getQueryParams();

    if (status && statusDescription) {
      toast.success(`Status: ${status}\nDescription: ${statusDescription}`);
    }

    if (error && errorDescription) {
      toast.error(`Error: ${error}\nDescription: ${errorDescription}`);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AlertHandler;
