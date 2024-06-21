import React from "react";
type Message = {
  message?: string;
};
interface FallbackProps {
  error: Message;
}

const Fallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <>
      <div role="alert">
        <p>Error Detected:</p>
        <span>{error.message} </span>
      </div>
    </>
  );
};

export default Fallback;
