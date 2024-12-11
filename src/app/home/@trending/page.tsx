import MaxWithWrapper from "@/components/MaxWithWrapper";
import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import { Cards as TrendingCards } from "@/components/trending/Card";
import { resolve } from "path";
import { simulateDelay } from "@/functions/functions";
import LoadCard from "@/components/loaders/Card";

const Trendingpage = async () => {
  await simulateDelay(3000);

  return (
    <section>
      <TitleSection title="Trending" />
      <Suspense
        fallback={
          <ul className="mt-4 flex w-full items-center gap-3 overflow-x-scroll">
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
