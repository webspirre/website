"use client";

import React, { useState } from "react";
import data from "@/componet/browse_designs/data";
import { useParams } from "next/navigation";
import ItemDetail from "./ItemDetail";
import Navbar from "@/componet/nav/Navbar";
import { useSession, signOut } from "next-auth/react";


function Page() {
      const { status } = useSession();

  const { id } = useParams<{ id: string }>();

  const [currentProjectId, setCurrentProjectId] = useState<number>(
    id ? parseInt(id, 10) - 1 : 0
  );

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentProjectId(randomIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentProjectId - 1 + data.length) % data.length;
    setCurrentProjectId(previousIndex);
  };

  return (
    <>
      <Navbar />
      <div className="justify-center px-20 mt-[100px]">
        <ItemDetail
          id={currentProjectId}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </>
  );
}

export default Page;
