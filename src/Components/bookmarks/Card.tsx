import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import { MetaData } from "../MetaData";

import { IData } from "@/interfaces/interfaces";
import { CardsLayout } from "../Layouts";
import BookmarkButton from "../BookmarkButton";
import { getData } from "@/functions/functions";

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`aspect-[1/0.6] w-full rounded-lg bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}
      >
        <MaxWithWrapper addClass="ml-auto w-fit">
          <BookmarkButton show={data.title} isBookmarked={data.isBookmarked} />
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
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter((data) => data.isBookmarked);
  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <Card data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};
