"use client";

// src/components/AlertHandler.tsx
import React, { useState, useEffect } from "react";
import { getQueryParams } from "../../../utils/queryParams";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertHandler: React.FC = () => {
  useEffect(() => {
    const alertShown = localStorage.getItem("alertShown");

    // if (!alertShown) {
    const { status, statusDescription, error, errorDescription } =
      getQueryParams();

    if ((status && statusDescription) || (error && errorDescription)) {
      // Show success toast for status or error
      if (status && statusDescription) {
        toast.success(statusDescription, { position: "top-left" });
      }

      // Show error toast for error
      if (error && errorDescription) {
        toast.error(errorDescription, { position: "top-left" });
      }

      // Mark the alert as shown
      // localStorage.setItem("alertShown", "true");
    }
    // }
  });

  return null; // This component doesn't render anything
};

export default AlertHandler;
