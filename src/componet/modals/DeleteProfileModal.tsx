import { ModalType } from "@/types/Modal.type";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
interface DeleteProps extends ModalType {
  isDeleting?: boolean;
  handleDelete(): void;
}
const DeleteProfileModal: React.FC<DeleteProps> = ({
  open,
  toogleModal,
  handleDelete,
  isDeleting,
}) => {
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
            <div className="fixed inset-0 bg-black/75" />
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
                  <div className="flex justify-between items-center p-2 sm:p-3 border-b mb-5 w-full">
                    <DialogTitle
                      as="h3"
                      className="text-base font-medium leading-6 text-gray-900"
                    >
                      Parmanently delete your account
                    </DialogTitle>
                    <ImCancelCircle
                      onClick={toogleModal}
                      className="cursor-pointer"
                    />
                  </div>
                  {/*render contents here  */}
                  <p className="text-base">
                    This action is irreversible! Once you delete your account,
                    you will permanently lose access to all your content and
                    bookmarks, if any. Are you sure you want to go ahead and
                    delete your account?
                  </p>

                  <div className="flex w-full items-center justify-end mt-5">
                    <button
                      className=" rounded-lg px-2 w-20 border flex justify-center items-center whitespace-nowrap py-3 font-bold mr-3"
                      onClick={toogleModal}
                    >
                      Cancle
                    </button>
                    <button
                      className="bg-[#FF0000] rounded-lg px-4 w-56 flex justify-center items-center whitespace-nowrap py-3 font-bold  text-white "
                      onSubmit={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : " Yes, Delete my account"}
                    </button>
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

export default DeleteProfileModal;
