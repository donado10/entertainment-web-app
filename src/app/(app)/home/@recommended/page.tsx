import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import LoadCard from "@/components/loaders/Card";
import { RecommendedCards } from "../../actions";

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
        <RecommendedCards />
      </Suspense>
    </section>
  );
};

export default RecommendPage;
