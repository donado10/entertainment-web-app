import { MoviesCards, SeriesCards } from "@/components/bookmarks/Card";
import LoadCard from "@/components/loaders/Card";
import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";

const BookmarkMovies = () => {
  return (
    <section>
      <TitleSection title="Bookmarked Movies" />
      <Suspense
        fallback={
          <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <LoadCard variant="small" />
            <LoadCard variant="small" />
            <LoadCard variant="small" />
          </ul>
        }
      >
        <MoviesCards />
      </Suspense>
    </section>
  );
};

export default BookmarkMovies;
