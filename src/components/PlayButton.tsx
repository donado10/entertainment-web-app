import React from "react";
import ShapeIcon from "@/assets/Shape.svg";
import Image from "next/image";

const PlayButton = ({ customClass }: { customClass: string }) => {
  return (
    <div
      className={
        "flex w-fit min-w-28 rounded-l-full rounded-r-full bg-white/30 p-2 hover:cursor-pointer" +
        " " +
        customClass
      }
    >
      <Image src={ShapeIcon} alt="" />
      <span className="text-md ml-4 font-semibold text-white">Play</span>
    </div>
  );
};
export default PlayButton;
