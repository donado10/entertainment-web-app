"use client";

import React, { useState } from "react";
import MaxWithWrapper from "./MaxWithWrapper";

import { IData } from "@/interfaces/interfaces";
import { LargeCardsLayout } from "./Layouts";
import { MetaData } from "./MetaData";
import BookmarkButton from "./BookmarkButton";
import PlayButton from "./PlayButton";

export const LargeCard: React.FC<{ data: IData }> = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <LargeCardsLayout data={data}>
      <MaxWithWrapper
        addClass={`relative flex flex-col justify-between hover:bg-black/40 h-full cursor-pointer`}
        onEnter={() => setHover(true)}
        onLeave={() => setHover(false)}
      >
        {hover && (
          <PlayButton customClass="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
        )}
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
    </LargeCardsLayout>
  );
};

export const MediumCard: React.FC<{ data: IData }> = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        className={`aspect-[1/0.5] w-full cursor-pointer rounded-lg bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}
      >
        <div
          className="relative h-full w-full hover:bg-black/40"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <PlayButton customClass="absolute flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
          <MaxWithWrapper addClass="ml-auto w-fit ">
            <BookmarkButton
              show={data.title}
              isBookmarked={data.isBookmarked}
            />
          </MaxWithWrapper>
        </div>
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
