import React from "react";
import ShapeIcon from "@/assets/Shape.svg";
import Image from "next/image";

const PlayButton = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-fit min-w-28 -translate-x-1/2 -translate-y-1/2 rounded-l-full rounded-r-full bg-white/30 p-2 hover:cursor-pointer">
      <Image src={ShapeIcon} alt="" />
      <span className="text-md ml-4 font-semibold text-white">Play</span>
    </div>
  );
};
export default PlayButton;
