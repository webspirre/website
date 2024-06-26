import { fetchDesignsPage } from "@/utils/designs/server";
import { useInfiniteQuery } from "react-query";

const pageSize = 20;

const useDesigns = () => {
  return useInfiniteQuery(
    "designs",
    ({ pageParam = 1 }) => fetchDesignsPage(pageParam, pageSize),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < pageSize) return undefined;
        return allPages.length + 1;
      },
    }
  );
};

export { useDesigns };
