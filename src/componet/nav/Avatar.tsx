"use client";
import React, { useEffect, useState } from "react";
import { Database } from "@/types/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import toast from "react-hot-toast";
type Profiles = Database["public"]["Tables"]["users"]["Row"];

export default function Avatar({
  uid,
  url,
  
}: {
  uid: string | undefined;
  url: Profiles["avatar_url"];
 
}) {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(url);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

 


  return (
    <div className="flex flex-row gap-4  items-center justify-center sm:justify-start">
      {avatarUrl ? (
        <div className="relative sm:w-auto max-w-ful ">
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-6 h-6  rounded-full"
          />
        </div>
      ) : (
        <Image
          height={100}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1719245069/utilities/webspirre/profile-user_iykavf.png"
          alt="avatar"
          className="w-6 h-6 rounded-full"
        />
      )}
      
      
    </div>
  );
}
