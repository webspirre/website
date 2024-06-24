import ProfileImageUpload from "@/componet/ui/profile/ProfileImageUpload";
import NewProfileImageUpload from "@/componet/ui/profile/newProfileImageUpload";
import { createClient } from "@/libs/supabase/client";
import { SupabaseResponse } from "@/types/supabase_res";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import {
  Session,
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/types_db";
import Avatar from "./avatar";
import toast from "react-hot-toast";
interface UserProp {
  handleToggle: () => void;
  user: User | null;
  getUser?: () => Promise<SupabaseResponse>;
  setAuth?: React.Dispatch<React.SetStateAction<any | null>>;
  isDeleting?: boolean;
}
const Users: React.FC<UserProp> = ({ handleToggle, user }) => {
  const supabase = createClientComponentClient<Database>();

  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  // log user to the console
  console.log("User Detail", user);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        .select(`full_name,  avatar_url`)
        .eq("id", user?.id as string)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        // setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      toast.error("Error loading user data!", { duration: 20000 });
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    avatar_url,
  }: {
    // username: string | null;
    fullname: string | null;
    // website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase.from("users").upsert({
        id: user?.id as string,
        full_name: fullname,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      toast.success("Profile updated!");
    } catch (error) {
      toast.error("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  // handleChange event for onchange method
  const handleChange = (e: React.ChangeEvent) => {};
  return (
    <div className="flex text-[12px] items-center justify-center my-0 sm:my-20">
      <div className="w-full sm:w-[50%] border-2 shadow-lg rounded-lg">
        <Image
          height={20}
          width={150}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707478972/utilities/Your_profile_jwvzud.svg"
          alt="rice"
          className="mx-6 sm:mx-[100px] mt-10"
        />
        <p className="mx-6 sm:mx-[100px]">Manage your account details</p>
        <div className="w-full h-[1px] mt-4 mb-4 bg-[#C7C7C7]"></div>

        <Avatar
          uid={user?.id}
          url={avatar_url}
          size={40}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ fullname, avatar_url: url });
          }}
        />
        <div className="flex flex-col gap-4 mx-6 sm:mx-[100px]">
          <label htmlFor="name" className="text-[14px] -mb-2 mt-4 font-bold">
            Name
          </label>
          <input
            placeholder="Full Name"
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] "
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
          />

          <label htmlFor="email" className="text-[14px] -mb-2 mt-4 font-bold">
            Email
          </label>
          <input
            placeholder="Enter Your Email"
            className="border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] "
            id="email"
            type="text"
            value={user?.email}
            disabled
          />

          <button
            className="p-2 font-bold bg-black rounded-lg text-white w-full sm:w-fit px-4"
            onClick={() => updateProfile({ fullname, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#C7C7C7] mt-10 mb-8"></div>
        <div className="mx-6 sm:mx-auto sm:w-[calc(100%-200px)] mb-20 flex flex-col items-center sm:items-start gap-4">
          <Image
            height={20}
            width={150}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707480659/utilities/Delete_account_fmobyl.svg"
            alt="rice"
            className=""
          />

          <p className="text-[#6E6E6E] text-xs sm:text-">
            Permanently delete your account and all your content
          </p>
          <button
            className="bg-[#FF0000] rounded-lg px-[100px] w-[70%] sm:w-full flex justify-center items-center whitespace-nowrap py-2 font-bold  text-white "
            onClick={handleToggle}
          >
            Delete your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
