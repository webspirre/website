import Image from "next/image";
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#94A3B8] flex md:hidden justify-between py-2 px-4">
      <div className="flex space-x-2">
        <div className="flex items-center ">
          {/* Bookmark button */}

          <div className="p-3 bg-[#F1F0EE] border border-[#94A3B8] rounded-lg">
            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554617/utilities/Intersect_vjti3y.svg"
              alt="bookmark"
            />
          </div>
        </div>
        <div className="flex items-center">
          {/* More Option button */}
          <div className="py-5 px-3 bg-[#F1F0EE] border border-[#94A3B8] rounded-lg">
            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554697/utilities/Union_weecgj.svg"
              alt="more options"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        {/* Visit Site link */}
        <Link href="/">
          <div className="p-3 bg-black text-white rounded-lg flex items-center gap-2">
            <p className="font-bold">Visit Site</p>
            <Image
              height={20}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706554673/utilities/arrow_up_1_hwov3p.svg"
              alt="arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
