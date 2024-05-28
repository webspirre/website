// pages/profile.tsx
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/libs/auth-helpers/server";

const ProfilePage = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
};

export default ProfilePage;
