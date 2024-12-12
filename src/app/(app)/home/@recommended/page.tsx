import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import { Cards as RecommendCards } from "@/components/recommended/Card";
import LoadCard from "@/components/loaders/Card";

const RecommendPage = () => {
  return (
    <section>
      <TitleSection title="Recommended for you" />
      <Suspense
        fallback={
          <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
          </ul>
        }
      >
        <RecommendCards />
      </Suspense>
    </section>
  );
};

export default RecommendPage;
