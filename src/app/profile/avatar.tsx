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

  const deleteAvatar = async () => {
    try {
      if (!uid || !url) {
        throw new Error("No user ID or avatar URL provided.");
      }

      const { error: deleteError } = await supabase.storage
        .from("avatars")
        .remove([url]);

      if (deleteError) {
        throw deleteError;
      }

      const { error: updateError } = await supabase
        .from("users")
        .update({ avatar_url: null })
        .eq("id", uid);

      if (updateError) {
        throw updateError;
      }

      setAvatarUrl(null);
      toast.success("Avatar deleted successfully!");
    } catch (error) {
      toast.error("Error deleting avatar!");
    }
  };

  return (
    <div className="flex flex-row gap-4 mx-6 sm:mx-[100px] items-center justify-center sm:justify-start">
      {avatarUrl ? (
        <div className="relative sm:w-auto max-w-ful ">
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-[130px] h-[130px] border-4 rounded-full"
          />
        </div>
      ) : (
        <Image
          height={100}
          width={100}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1719245069/utilities/webspirre/profile-user_iykavf.png"
          alt="avatar"
          className="w-[130px] h-[130px] rounded-full"
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
      <button className="flex items-center gap-2" onClick={deleteAvatar}>
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
