import { ModalType } from "@/types/Modal.type";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/navigation";
interface DeleteProps extends ModalType {
  isDeleting?: boolean;
  //   handleDelete(): void;
}
const AuthModal: React.FC<DeleteProps> = ({
  open,
  toogleModal,
  isDeleting,
}) => {
  const router = useRouter();
  return (
    <>
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
            <div className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-full md:max-w-xl transform overflow-hidden rounded-none sm:rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center p-3 border-b mb-5 w-full">
                    <DialogTitle
                      as="h3"
                      className="text-xs font-medium leading-6 text-gray-900"
                    >
                      Sign up/Login
                    </DialogTitle>

                    <Image
                      height={10}
                      width={10}
                      onClick={toogleModal}
                      alt="img"
                      src="https://res.cloudinary.com/dwqantex4/image/upload/v1718104910/x_as7ir4.png"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4 justify-center items-center w-full">
                    <Image
                      height={220}
                      width={220}
                      alt="img"
                      src="https://res.cloudinary.com/dwqantex4/image/upload/v1718140973/Frame_101_s7w2d3.png"
                      className="w-]"
                    />
                    <p className="text-xs text-center max-w-full sm:max-w-4xl text-black font-semibold">
                      You need to Sign up or Login to be able to take this
                      action.
                    </p>
                    <div className="flex flex-col justify-center items-center sm:flex-row gap-3 w-full max-w-[70%] mx-auto p-4">
                      <button
                        className="w-full sm:w-auto p-2.5 bg-white text-black text-xs font-medium border border-black rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                        onClick={toogleModal}
                      >
                        Cancel
                      </button>
                      <Link
                        href="/auth/register"
                        className="w-full sm:w-auto p-2.5 bg-black text-white text-xs font-medium border border-black rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                      >
                        Sign up
                      </Link>
                    </div>
                    <p className="text-xs text-center text-slate-400 font-semibold">
                      Already have an account?{" "}
                      <Link href="/auth/login" className="text-black">
                        Login
                      </Link>
                    </p>
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

export default AuthModal;
