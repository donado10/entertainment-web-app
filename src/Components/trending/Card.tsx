import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import BookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import BookmarkFull from "@/assets/icon-bookmark-full.svg";
import Image from "next/image";
import IconNavMovie from "@/assets/icon-nav-movies.svg";
import dataApp from "@/assets/data.json";

import { IData } from "@/interfaces/interfaces";

const ShowMetaData = ({
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
      <p className="flex flex-row items-center gap-2 text-xs font-normal text-gray-300">
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

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div
      className={`aspect-[1/0.58] w-60 rounded-lg bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${data.thumbnail.trending.small})` }}
    >
      <MaxWithWrapper>
        <div className="ml-auto w-fit rounded-full bg-entertain-secondary/50 p-2">
          {!data.isBookmarked && (
            <Image
              src={BookmarkEmpty}
              alt="bookmark empty"
              className="m-auto"
            />
          )}
          {data.isBookmarked && (
            <Image src={BookmarkFull} alt="bookmark full" className="m-auto" />
          )}
        </div>
        <div className="mt-10">
          <ShowMetaData
            year={data.year}
            category={data.category}
            rating={data.rating}
            title={data.title}
          />
        </div>
      </MaxWithWrapper>
    </div>
  );
};

export const Cards = async () => {
  const dataList: IData[] = dataApp as IData[];
  const dataListFilter = dataList.filter((data) => data.isTrending);
  return (
    <ul className="mt-4 flex w-full items-center gap-3 overflow-x-scroll">
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
};
