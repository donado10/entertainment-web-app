"use client";

import useMediaQuery, { EMediaQuery } from "@/hooks/useMediaQuery";
import { IData } from "@/interfaces/interfaces";
import { ReactNode } from "react";

export const CardsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
};

export const TrendingCardsLayout = ({
  children,
  data,
}: {
  children: ReactNode;
  data: IData;
}) => {
  const isMobile = useMediaQuery(EMediaQuery.MOBILE);
  const isSmall = useMediaQuery(EMediaQuery.SMALL);
  return (
    <>
      {isMobile && !isSmall && (
        <div
          className={`aspect-[1/0.58] w-60 rounded-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${data.thumbnail.trending.small})` }}
        >
          {children}
        </div>
      )}
      {isSmall && (
        <div
          className={`aspect-[1/0.48] w-[30rem] rounded-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${data.thumbnail.trending.large})` }}
        >
          {children}
        </div>
      )}
    </>
  );
};
