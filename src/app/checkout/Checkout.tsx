import Image from "next/image";
import React from "react";
import { Carter_One } from "next/font/google";
import Link from "next/link";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function CheckoutVeiw() {
  return (
    <div>
      <div className="relative w-full flex flex-col justify-center p-[37px]  ">
        <Image
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716492077/utilities/webspirre/Vector_10_nnmifu.png"
          className="absolute top-[37px]"
          width={23}
          height={45}
          alt="back"
        />
        <h1 className="text-center sm:text-[16px] font-semibold text-white">
          Checkout
        </h1>

        <div className="w-full flex flex-col justify-center items-center mt-[70px] mb-[60px] border-b border-white border-opacity-[70%] pb-[24px]">
          <h1 className="text-white text-[16px] opacity-[70%] ">Duration</h1>
          <div className="flex justify-center gap-3 w-full">
            <button className="">
              <Image
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716494333/utilities/webspirre/upgrade_cta_jbchxs.svg"
                className=" top-[37px]"
                width={58}
                height={45}
                alt="reduce"
              />
            </button>

            <div className="flex flex-col justify-center text-white px-4">
              <h1 className="text-center">2</h1>
              <p className="text-center opacity-[70%]">Month(s)</p>
            </div>

            <button>
              <Image
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716494334/utilities/webspirre/upgrade_cta_1_banfme.svg"
                className=" top-[37px]"
                width={58}
                height={45}
                alt="reduce"
              />
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center text-[14px]">
            <h1 className="text-[11px] italic text-white opacity-[70%] ">
              Total amount due
            </h1>
            <h1 className={` ${carterOne.className} text-white text-[24px]`}>
              $<span className="sm:text-[44px]">12</span>.oo
            </h1>

            <p className="text-white">
              <span className=" opacity-[70%]">Payment for</span> Monthly{" "}
              <span className=" opacity-[70%]">Subscription </span>{" "}
              <span>
                <Link href="/" className="text-white border-b border-white">
                  Change plan
                </Link>{" "}
              </span>
            </p>
          </div>

          <div className="mt-[68px] mb-[58px]">
            <div className="border-b border-opacity-[80%] pb-4 mb-[24px]">
              <h1 className="text-white">Summary</h1>
            </div>

            <div>
              <div className="flex justify-between items-center text-white mb-[8px]">
                <h2 className="text-2 opacity-[70%]">Duration</h2>
                <h2>2 Month(s)</h2>
              </div>
              <div className="flex justify-between items-center text-white mb-[8px]">
                <h2 className="text-2 opacity-[70%]">Amount due per month</h2>
                <h2>$6.00</h2>
              </div>
              <div className="flex justify-between items-center text-white mb-[8px]">
                <h2 className="text-2 opacity-[70%]">Total Due</h2>
                <h2>$12.00</h2>
              </div>
              <div className="flex justify-between items-center text-white mb-[8px]">
                <h2 className="text-2 opacity-[70%]">Next due date</h2>
                <h2>12 Aug 2024</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716497436/utilities/webspirre/image_1_dhffcs.svg"
              className=" top-[37px]"
              width={98}
              height={45}
              alt="reduce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutVeiw;
