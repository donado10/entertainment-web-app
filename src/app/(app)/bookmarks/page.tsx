import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import FilterSection from "@/components/Filter";
import { ESection } from "@/components/search/Card";
import LoadCard from "@/components/loaders/Card";
import { validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";
import BookmarkMovies from "./@bookmarkMovies/page";
import BookmarkSeries from "./@bookmarkSeries/page";

interface Params {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const page = async ({ searchParams }: Params) => {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  const search = (await searchParams).search;

  return (
    <section className="flex flex-col gap-8">
      {!search && (
        <>
          <MaxWithWrapper>
            <BookmarkMovies />
          </MaxWithWrapper>
          <MaxWithWrapper>
            <BookmarkSeries />
          </MaxWithWrapper>
        </>
      )}
      {search && (
        <>
          <MaxWithWrapper>
            <Suspense
              fallback={
                <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                  <LoadCard variant="small" />
                  <LoadCard variant="small" />
                </ul>
              }
            >
              <FilterSection section={ESection.BOOKMARKS} search={search} />
            </Suspense>
          </MaxWithWrapper>
        </>
      )}
    </section>
  );
};

export default page;
