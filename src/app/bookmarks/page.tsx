import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as BookmarksCards } from "@/components/bookmarks/Card";
import MaxWithWrapper from "@/components/MaxWithWrapper";

const page = () => {
  return (
    <section>
      <MaxWithWrapper>
        <TitleSection title="Bookmarked Movies" />
        <BookmarksCards />
      </MaxWithWrapper>
    </section>
  );
};

export default page;
