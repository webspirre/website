"use client";

import React, { useState, useEffect } from "react";
import data from "@/componet/browse_designs/data";
import { useParams } from "next/navigation";
import type { User } from "@supabase/auth-helpers-nextjs";

import Navbar from "@/componet/nav/Navbar";
import ItemDetail from "@/app/detail/[id]/ItemDetail";
import { fetchDesigns } from "@/utils/designs/server";
import { Database } from "@/types/types_db";
import AuthModal from "../modals/AuthModal";

interface DetailLayoutProps {
  user: User | null;
  id: string;
}
type Designs = Database["public"]["Tables"]["website"]["Row"];

const DetailLayout: React.FC<DetailLayoutProps> = ({ user, id }) => {
  //   const { id } = useParams<{ id: string }>();
  const [designs, setDesigns] = useState<Designs[]>([]);
  const displayDesigns = async () => {
    const designs = await fetchDesigns();
    console.log("Data Response", designs);
    if (designs) {
      setDesigns(designs);
    }
  };

  useEffect(() => {
    displayDesigns();
  }, []);

  const [currentProjectId, setCurrentProjectId] = useState<string | null>(id);
  const [authModal, setAuthModal] = useState(false);
  const handleAuthModal = () => setAuthModal((prev) => !prev);

  const handleNext = () => {
    const currentIndex = designs.findIndex(
      (item) => item.uid === currentProjectId
    );
    const nextIndex = (currentIndex + 1) % designs.length;
    if (currentProjectId) {
      setCurrentProjectId(designs[nextIndex]?.uid);
    }
  };

  const handlePrevious = () => {
    const currentIndex = designs.findIndex(
      (item) => item.uid === currentProjectId
    );
    const previousIndex = (currentIndex - 1 + designs.length) % designs.length;
    if (currentProjectId) {
      setCurrentProjectId(designs[previousIndex]?.uid);
    }
  };

  console.log("djdd", id);

  return (
    <>
          <AuthModal open={authModal} toogleModal={handleAuthModal} />
      <div className="justify-center px-2 xl:px-20 mt-5 xl:mt-[100px]  flex w-full items-center  ">
        <ItemDetail
          // id={id}
          id={currentProjectId as string}
          onNext={handleNext}
          onPrevious={handlePrevious}
          user={user}
          toogleModal={handleAuthModal} 
        />
      </div>
    </>
  );
};

export default DetailLayout;
