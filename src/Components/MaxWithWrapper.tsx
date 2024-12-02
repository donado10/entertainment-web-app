import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWithWrapper: React.FC<{
  customClass?: string;
  addClass?: string;
  children: ReactNode;
}> = ({ customClass, addClass, children }) => {
  return (
    <div className={cn(`w-full px-4 py-2 ${addClass}`, customClass)}>
      {children}
    </div>
  );
};

export default MaxWithWrapper;
