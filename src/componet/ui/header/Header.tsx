import React from "react";
interface HeaderProps {
  heading: React.ReactNode;
  paragraph: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  heading = "Webspirre Terms Of Service",
  paragraph,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-3 items-center text-center">
        <header>{heading}</header>
        <p className="text-sm sm:text-sm font-normal">{paragraph}</p>
        <span className="max-w-[70%] w-full h-[1px] bg-slate-100" />
      </div>
    </>
  );
};

export default Header;
