// components/DeleteAccountButton.tsx
import { deleteUserAccount } from "@/libs/auth-helpers/server";

const DeleteAccountButton = ({ userId }: { userId: string }) => {
  const handleDelete = async () => {
    try {
      const redirectPath = await deleteUserAccount(userId);
      window.location.href = redirectPath;
    } catch (err) {
      console.error("Error deleting account:", err);
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteAccountButton;
