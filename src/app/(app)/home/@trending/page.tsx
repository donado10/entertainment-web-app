import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import { TrendingCards } from "@/app/(app)/actions";
import LoadCard from "@/components/loaders/Card";

const Trendingpage = async () => {
  return (
    <section>
      <TitleSection title="Trending" />
      <Suspense
        fallback={
          <ul className="mt-4 flex w-full items-center gap-8 overflow-x-scroll">
            <li>
              <LoadCard />
            </li>
            <li>
              <LoadCard />
            </li>
            <li>
              <LoadCard />
            </li>
          </ul>
        }
      >
        <TrendingCards />
      </Suspense>
    </section>
  );
};

export default Trendingpage;
