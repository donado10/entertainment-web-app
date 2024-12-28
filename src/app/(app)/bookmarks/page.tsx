import TitleSection from "@/components/TitleSection";
import React, { Suspense } from "react";
import { Cards as BookmarksCards } from "@/components/bookmarks/Card";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import FilterSection from "@/components/Filter";
import { ESection } from "@/components/search/Card";
import LoadCard from "@/components/loaders/Card";
import { validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";

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
    <section>
      {!search && (
        <MaxWithWrapper>
          <TitleSection title="Bookmarked Movies" />
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
            <BookmarksCards />
          </Suspense>
        </MaxWithWrapper>
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
