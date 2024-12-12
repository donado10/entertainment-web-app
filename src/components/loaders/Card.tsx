import React from "react";
import { Skeleton } from "../ui/skeleton";

const BigCard = () => {
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

const SmallCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-[1/0.5] w-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[10rem]" />
        <Skeleton className="h-4 w-[5rem]" />
      </div>
    </div>
  );
};

const LoadCard = ({ variant = "big" }: { variant?: "big" | "small" }) => {
  if (variant === "big") {
    return <BigCard />;
  }
  if ((variant = "small")) {
    return <SmallCard />;
  }
};

export default LoadCard;
