import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as MoviesCards } from "@/components/movies/Card";
import MaxWithWrapper from "@/components/MaxWithWrapper";

const page = () => {
  return (
    <section>
      <MaxWithWrapper>
        <TitleSection title="Movies" />
        <MoviesCards />
      </MaxWithWrapper>
    </section>
  );
};

export default page;
