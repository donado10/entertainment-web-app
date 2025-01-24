import Image from "next/image";
import IconNavMovie from "@/assets/icon-nav-movies-active.svg";

export const MetaData = ({
  year,
  category,
  rating,
  title,
}: {
  year: number;
  category: string;
  rating: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col text-white">
      <p className="text-md flex flex-row items-center gap-2 font-semibold text-gray-400">
        <span>{year}</span>
        <span className="block aspect-square w-1 rounded-full bg-gray-400" />
        <span>
          <Image src={IconNavMovie} alt="icon movie" />
        </span>
        <span>{category}</span>
        <span className="block aspect-square w-1 rounded-full bg-gray-400" />
        <span>{rating}</span>
      </p>
      <h1 className="text-base">{title}</h1>
    </div>
  );
};
