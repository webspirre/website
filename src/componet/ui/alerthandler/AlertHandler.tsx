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
      toast.success(` ${statusDescription}`, { duration: 2500 });
    }

    if (error && errorDescription) {
      toast.error(` ${errorDescription}`, { duration: 2500 });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AlertHandler;
