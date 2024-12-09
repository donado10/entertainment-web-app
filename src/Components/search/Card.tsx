import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import BookmarkButton from "../BookmarkButton";
import { MetaData } from "../MetaData";

import { IData } from "@/interfaces/interfaces";
import { CardsLayout } from "../Layouts";

export enum ESection {
  ALL,
  MOVIES,
  SERIES,
  BOOKMARKS,
}

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`aspect-[1/0.6] w-full rounded-lg bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}
      >
        <MaxWithWrapper addClass="ml-auto w-fit">
          <BookmarkButton isBookmarked={data.isBookmarked} />
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

export const Cards = async ({ data }: { data: IData[] }) => {
  return (
    <CardsLayout>
      {data.map((d, i) => (
        <li key={i}>
          <Card data={d} />
        </li>
      ))}
    </CardsLayout>
  );
};
