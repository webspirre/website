"use client";

import React, { useState } from "react";
import { Database } from "@/types/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import UserAccount from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";
import type { User } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";
interface UserAccountFormProps {
  user: User | null;
}
const UserAccountForm: React.FC<UserAccountFormProps> = ({ user }) => {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(false);

  // delete user
  async function deleteProfile(userId: string) {
    try {
      setLoading(true);

      const { error } = await supabase.from("users").delete().eq("id", userId);

      if (error) throw error;

      toast.success("Profile deleted!");
    } catch (error) {
      toast.error("Error deleting the profile!");
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async () => {
    // if (window.confirm("Are you sure you want to delete your profile?")) {
    await deleteProfile(user?.id as string);
    // }
  };
  return (
    <>
      <DeleteProfileModal
        open={toogleModal}
        toogleModal={handleToggle}
        handleDelete={handleDelete}
        isDeleting={loading}
      />
      <div>
        <UserAccount handleToggle={handleToggle} user={user} />
      </div>
    </>
  );
};

export default UserAccountForm;
