import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import BookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import BookmarkFull from "@/assets/icon-bookmark-full.svg";
import Image from "next/image";
import dataApp from "@/assets/data.json";
import { MetaData } from "../MetaData";

import { IData } from "@/interfaces/interfaces";

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`aspect-[1/0.6] w-full rounded-lg bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}
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
              <Image
                src={BookmarkFull}
                alt="bookmark full"
                className="m-auto"
              />
            )}
          </div>
        </MaxWithWrapper>
      </div>
      <div className="mt-2">
        <MetaData
          year={data.year}
          category={data.category}
          rating={data.rating}
          title={data.title}
        />
      </div>
    </div>
  );
};

export const Cards = async () => {
  const dataList: IData[] = dataApp as IData[];
  const dataListFilter = dataList.filter((data) => data.isBookmarked);
  return (
    <ul className="mt-4 grid grid-cols-2 gap-4">
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
};
