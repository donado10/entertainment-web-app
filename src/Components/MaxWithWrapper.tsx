import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWithWrapper: React.FC<{
  customClass?: string;
  children: ReactNode;
}> = ({ customClass, children }) => {
  return (
    <div className={cn("w-full max-w-screen-xl px-4 py-2", customClass)}>
      {children}
    </div>
  );
};

export default MaxWithWrapper;
