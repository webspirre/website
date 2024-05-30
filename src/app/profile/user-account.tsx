"use client";

import React, { useState } from "react";
import UserAccount from "./user";
import DeleteProfileModal from "@/componet/modals/DeleteProfileModal";
import type { User } from "@supabase/auth-helpers-nextjs";
interface UserAccountFormProps {
  user: User | null;
}
const UserAccountForm: React.FC<UserAccountFormProps> = ({ user }) => {
  const [toogleModal, setToogleModal] = useState<boolean>(false);
  const handleToggle = () => setToogleModal((prev) => !prev);
  return (
    <>
      <DeleteProfileModal open={toogleModal} toogleModal={handleToggle} />
      <div>
        <UserAccount handleToggle={handleToggle} user={user} />
      </div>
    </>
  );
};

export default UserAccountForm;
