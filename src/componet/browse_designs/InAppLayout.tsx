"use client";

import Browse from "@/componet/browse_designs/Browse";
import React, { useEffect, useState } from "react";
import type { User } from "@supabase/auth-helpers-nextjs";
import { fetchDesigns } from "@/utils/designs/server";
import { Database } from "@/types/types_db";
import useDesign from "@/hooks/useDesign";
import Loader from "./Loader";

interface HomeLayoutProps {
  user: User | null;
}
type Designs = Database["public"]["Tables"]["website"]["Row"];

const InAppLayout: React.FC<HomeLayoutProps> = ({ user }) => {
  const [authModal, setAuthModal] = useState(false);
  const handleAuthModal = () => setAuthModal((prev) => !prev);
  const [designs, setDesigns] = useState<Designs[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const displayDesigns = async () => {
    setLoading(true); // Set loading to true when starting to fetch designs
    const designs = await fetchDesigns();
    console.log("Data Response", designs);
    if (designs) {
      setDesigns(designs);
    }
    setLoading(false); // Set loading to false when designs are fetched
  };

  useEffect(() => {
    displayDesigns();
  }, []);
  return (
    <div>
      <div className="mt-20">
        {loading ? (
          <Loader />
        ) : (
          <Browse
            user={user}
            handleAuthModal={handleAuthModal}
            designs={designs}
          />
        )}
      </div>
    </div>
  );
};

export default InAppLayout;
