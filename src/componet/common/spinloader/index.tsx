import React from "react";

const SpinLoader = () => {
  return (
    <div className="flex h-auto items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default SpinLoader;
