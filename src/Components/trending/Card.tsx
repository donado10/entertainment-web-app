import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import BookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import BookmarkFull from "@/assets/icon-bookmark-full.svg";
import Image from "next/image";
import dataApp from "@/assets/data.json";

import { IData } from "@/interfaces/interfaces";
import { TrendingCardsLayout } from "../Layouts";
import { MetaData } from "../MetaData";
import BookmarkButton from "../BookmarkButton";
import { getData } from "@/functions/functions";

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <TrendingCardsLayout data={data}>
      <MaxWithWrapper addClass="flex flex-col justify-between  h-full">
        <BookmarkButton isBookmarked={data.isBookmarked} />

        <div className="w-fit">
          <MetaData
            year={data.year}
            category={data.category}
            rating={data.rating}
            title={data.title}
          />
        </div>
      </MaxWithWrapper>
    </TrendingCardsLayout>
  );
};

export const Cards = async () => {
  const dataList: IData[] = await getData();

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
