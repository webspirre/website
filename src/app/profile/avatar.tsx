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
  size,
  onUpload,
}: {
  uid: string | undefined;
  url: Profiles["avatar_url"];
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(url);
  const [uploading, setUploading] = useState(false);

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

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      toast.error("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-row gap-4 mx-6 sm:mx-[100px] items-center justify-center sm:justify-start">
      {avatarUrl ? (
        // <Image
        //   width={size}
        //   height={size}
        //   src={avatarUrl}
        //   alt="Avatar"
        //   className="w-32 sm:w-auto"
        // />
        <div className="relative w-32 sm:w-auto max-w-full">
          <Image
            src={avatarUrl}
            alt="Avatar"
            layout="responsive"
            width={1}
            height={1}
            className="object-cover rounded-full"
          />
        </div>
      ) : (
        // <div
        //   className="avatar no-image"
        //   style={{ height: size, width: size }}
        // />
        <Image
          height={size}
          width={size}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707432454/utilities/profile_image_b4sbia.svg"
          alt="rice"
          className="w-32 sm:w-auto"
        />
      )}
      <div>
        <label
          className="p-2 border rounded-lg block cursor-pointer"
          htmlFor="single"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
      <button className="flex items-center gap-2">
        <Image
          height={20}
          width={20}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707479658/utilities/fi-rs-trash_tga1yh.svg"
          alt="rice"
          className=""
        />
        Delete
      </button>
    </div>
  );
}
