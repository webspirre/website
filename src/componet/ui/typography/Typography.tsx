import React from "react";
import cx from "classnames";
interface TypographyProps {
  heading: string;
  paragraph: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({ heading, paragraph }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 items-start text-black my-4 sm:my-8">
        <h1 className={cx("text-xl sm:text-2xl font-black")}>{heading}</h1>
        <p
          className={cx(
            "text-sm sm:text-base font-normal flex flex-col space-y-1.5 sm:space-y-2.5 w-full sm:max-w-[80%]"
          )}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default Typography;
