import React from "react";
import { Skeleton } from "../ui/skeleton";

const LoadCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-[1/0.4] w-[30rem]" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[10rem]" />
        <Skeleton className="h-4 w-[5rem]" />
      </div>
    </div>
  );
};

export default LoadCard;
