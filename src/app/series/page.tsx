import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as SeriesCards } from "@/components/series/Card";
import MaxWithWrapper from "@/components/MaxWithWrapper";

const page = () => {
  return (
    <section>
      <MaxWithWrapper>
        <TitleSection title="TV Series" />
        <SeriesCards />
      </MaxWithWrapper>
    </section>
  );
};

export default page;
