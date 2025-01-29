import LoadCard from "@/components/loaders/Card";
import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import { BookmarkSeriesCards } from "../../actions";

const BookmarkSeries = () => {
  return (
    <section>
      <TitleSection title="Bookmarked Series" />
      <Suspense
        fallback={
          <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
          </ul>
        }
      >
        <BookmarkSeriesCards />
      </Suspense>
    </section>
  );
};

export default BookmarkSeries;
