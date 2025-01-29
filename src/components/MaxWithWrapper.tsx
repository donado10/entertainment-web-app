"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWithWrapper: React.FC<{
  customClass?: string;
  addClass?: string;
  children: ReactNode;
  onEnter?: () => void;
  onLeave?: () => void;
}> = ({ customClass, addClass, children, onEnter, onLeave }) => {
  return (
    <div
      className={cn(
        `w-full px-4 py-2 ${addClass ? addClass : ""}`,
        customClass,
      )}
      onMouseEnter={() => onEnter && onEnter()}
      onMouseLeave={() => onLeave && onLeave()}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
