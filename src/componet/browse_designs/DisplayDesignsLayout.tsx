import React from "react";
import Browse from "./Browse";
import Loader from "./Loader";
import { useDesigns } from "@/hooks/useDesigns";
import type { User } from "@supabase/auth-helpers-nextjs";

interface DisplayDesignsLayoutProps {
  user: User | null;
  handleAuthModal: () => void;
}
const DisplayDesignsLayout: React.FC<DisplayDesignsLayoutProps> = ({
  user,
  handleAuthModal,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDesigns();
  const designs = data?.pages.flatMap((page) => page) || [];
  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <Browse
            user={user}
            handleAuthModal={handleAuthModal}
            designs={designs}
          />
        )}
      </div>
    </>
  );
};

export default DisplayDesignsLayout;
