import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as MoviesCards } from "@/components/movies/Card";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import FilterSection from "@/components/Filter";
import { ESection } from "@/components/search/Card";

interface Params {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const page = async ({ searchParams }: Params) => {
  const search = (await searchParams).search;

  return (
    <section>
      {!search && (
        <MaxWithWrapper>
          <TitleSection title="Movies" />
          <MoviesCards />
        </MaxWithWrapper>
      )}
      {search && (
        <>
          <MaxWithWrapper>
            <FilterSection section={ESection.MOVIES} search={search} />
          </MaxWithWrapper>
        </>
      )}
    </section>
  );
};

export default page;
