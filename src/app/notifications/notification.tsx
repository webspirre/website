"use client";

import React, { useState } from "react";
import { Carter_One } from "next/font/google";
import Image from "next/image";
import { Database } from "@/types/types_db";
// import { createClient } from "@/libs/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { deleteMsg } from "@/libs/auth-helpers/server";
import toast from "react-hot-toast";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type NotificationT = Database["public"]["Tables"]["notifications"]["Row"];
interface NotificationProps {
  notifications: NotificationT[] | null;
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  const [showDropdowns, setShowDropdowns] = useState(Array(10).fill(false)); // Assuming you have 10 notifications
  const [deleteAll, setDeleteAll] = useState(false);

  const toggleDropdown = (index: number) => {
    const newDropdowns = [...showDropdowns];
    newDropdowns[index] = !newDropdowns[index];
    setShowDropdowns(newDropdowns);
    setDeleteAll(false);
  };

  const toggleDeleteAll = () => {
    setDeleteAll((prev) => !prev);
  };

  const handleDelMessage = async (id: string) => {
    if (!notifications?.length) return toast.error("Nothing to delete");

    try {
      const { error } = await deleteMsg(id);
      if (error) {
        toast.error("Failed to delete the notification");
        console.error("Delete error:", error);
      } else {
        toast.success("Notification deleted successfully");

        // Update the local state to remove the deleted notification
        // setNotifications((prevNotifications) =>
        //   prevNotifications?.filter((notification) => notification.id !== id)
        // );
      }
    } catch (err) {
      toast.error("An error occurred during deletion");
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="my-0 sm:my-20 flex justify-center">
      <div className="w-full md:w-full px-4 sm:px-0 sm:w-[60%] rounded-lg border-2 shadow-lg">
        <div className="flex mx-0 sm:mx-[50px] mt-[70px] sm:mt-[50px] mb-[20px] justify-between items-center">
          <div className={carterOne.className}>
            <p className="text-lg sm:text-[24px]">
              Notifications - {notifications && notifications.length}{" "}
              <span className="text-xs ">Message / Messages</span>
            </p>
          </div>
          <div>
            <Image
              height={20}
              width={15}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707507709/utilities/fi-rr-menu-dots_milpoo.svg"
              alt="Message"
              className="cursor-pointer"
              onClick={toggleDeleteAll}
            />
            {deleteAll && (
              <div className="absolute right-8 bg-white rounded-lg border-2 p-4 px-8 z-10">
                <button
                  className="flex items-center gap-2"
                  // onClick={() => alert("Mark as read")}
                  onClick={() => handleDelMessage}
                >
                  <Image
                    height={20}
                    width={20}
                    src="https://res.cloudinary.com/dwqantex4/image/upload/v1716475693/01_align_center_xgmtkk.png"
                    alt="rice"
                    className=""
                  />
                  Delete All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Notification cards */}
        {notifications && notifications.length <= 0 && (
          <>
            <p className="text-sm py-2 text-center">No Notifications Found</p>
          </>
        )}
        {notifications &&
          notifications.map((notification, index) => (
            <>
              <div
                key={notification.id}
                className=" border-t-2  flex justify-between py-4 sm:py-8 relative"
              >
                <div className="flex gap-2 mx-0 sm:mx-[50px]">
                  <div>
                    <Image
                      height={20}
                      width={47}
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707507805/utilities/message_frame_eqtscn.svg"
                      alt="Message"
                    />
                  </div>
                  <div>
                    <h1 className="text-[14px] font-medium w-auto sm:w-[350px] mb-2">
                      {notification.title}
                    </h1>
                    <p className="text-[12px] text-[#6E6E6E] w-auto sm:w-[350px]">
                      {notification.description}
                    </p>
                    <p className="text-[8px] mt-4">{notification.timestamp}</p>
                  </div>
                </div>
                <div className="mx-0 sm:mx-[50px]">
                  <Image
                    height={20}
                    width={15}
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707507709/utilities/fi-rr-menu-dots_milpoo.svg"
                    alt="Menu"
                    onClick={() => toggleDropdown(index)}
                  />
                  {showDropdowns[index] && (
                    <div className="absolute right-8 bg-white rounded-lg border border-gray-200 shadow-md p-4 px-8 z-10">
                      <button
                        className="flex items-center gap-2 mb-4"
                        onClick={() => alert("Mark as read")}
                      >
                        <Image
                          height={20}
                          width={20}
                          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707519245/utilities/check-circle_jnu2vp.svg"
                          alt="rice"
                          className=""
                        />
                        Mark as read{" "}
                      </button>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => alert("Delete button clicked")}
                      >
                        <Image
                          height={20}
                          width={20}
                          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707479658/utilities/fi-rs-trash_tga1yh.svg"
                          alt="rice"
                          className=""
                        />
                        Delete notification{" "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Notification;
