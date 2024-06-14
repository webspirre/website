import React from "react";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  return (
    <div
      className={`h-[1px] flex bg-[#f19731]  w-full transition-all duration-300 ${
        isLoading ? "w-full" : "w-0"
      }`}
    ></div>
  );
}

export default LoadingIndicator;
