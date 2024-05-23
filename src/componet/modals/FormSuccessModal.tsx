import { ModalType } from "@/types/Modal.type";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { Carter_One } from "next/font/google";
import { SiSparkar } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import React from "react";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface MyModalProps extends ModalType {
  videoToggle?: () => void;
  name?: string;
  resetForm?: () => void;
}

const FormSuccessModal: React.FC<MyModalProps> = ({
  open,
  toogleModal,
  videoToggle,
  resetForm,
  name,
}) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={toogleModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toogleModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-full md:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                  <div className="w-full flex flex-col md:flex-row justify-center ">
                    <div className="text-center px-2 py-5 flex-1">
                      <DialogTitle
                        as="h3"
                        className={`${carterOne.className} text-6xl font-black leading-tight`}
                      >
                        Hurray
                      </DialogTitle>
                      <h1 className="text-xl font-medium pt-10">
                        Thank you{" "}
                        <span className="font-black">
                          {name ? name : "User"}
                        </span>
                        , you have successfully joined the Webspirre Waitlist
                        and you will be notified immediately when we go live.
                      </h1>
                      <button
                        onClick={toogleModal}
                        className="bg-black py-4 mt-16 px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[18px] inline-block hover:text-slate-100 hover:bg-slate-900"
                      >
                        Okay, thanks
                      </button>
                    </div>
                    {/*  */}
                    <div className="flex-1 p-2">
                      <div className="mt-2 p-2 flex space-x-3 rounded-xl bg-gradient-to-t from-pink-50 to-[#F9F4E8] shadow-md">
                        <SiSparkar />
                        <p className="text-sm text-gray-500">
                          Watch how it works in the quick video below.
                        </p>
                      </div>
                      <div className="mt-8 w-full p-0 border-transparent bg-[#D9D9D9] h-80 flex items-center justify-center rounded-lg">
                        <div
                          className="p-5 flex item-center justify-center shadow-sm bg-white rounded-xl cursor-pointer"
                          // onClick={() => videoToggle && resetForm}
                          onClick={videoToggle}
                        >
                          <FaPlay size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FormSuccessModal;
