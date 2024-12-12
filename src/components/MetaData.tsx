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
      <p className="flex flex-row items-center gap-2 text-xs font-semibold text-gray-500">
        <span>{year}</span>
        <span className="block aspect-square w-1 rounded-full bg-gray-300" />
        <span>
          <Image src={IconNavMovie} alt="icon movie" />
        </span>
        <span>{category}</span>
        <span className="block aspect-square w-1 rounded-full bg-gray-300" />
        <span>{rating}</span>
      </p>
      <h1 className="text-base">{title}</h1>
    </div>
  );
};
