"use client";

import React, { useState } from "react";
import MaxWithWrapper from "../MaxWithWrapper";

import { IData } from "@/interfaces/interfaces";
import { TrendingCardsLayout } from "../Layouts";
import { MetaData } from "../MetaData";
import BookmarkButton from "../BookmarkButton";
import PlayButton from "../PlayButton";

export const Card: React.FC<{ data: IData }> = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <TrendingCardsLayout data={data}>
      <MaxWithWrapper
        addClass={`relative flex flex-col justify-between hover:bg-black/40 h-full`}
        onEnter={() => setHover(true)}
        onLeave={() => setHover(false)}
      >
        {hover && <PlayButton />}
        <BookmarkButton show={data.title} isBookmarked={data.isBookmarked} />
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
