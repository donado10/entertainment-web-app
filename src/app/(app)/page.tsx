import Trendingpage from "./home/@trending/page";
import RecommendPage from "./home/@recommended/page";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import FilterSection from "@/components/Filter";
import { ESection } from "@/components/search/Card";
import { Suspense } from "react";
import LoadCard from "@/components/loaders/Card";
import { validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";

interface Params {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: Params) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  const search = (await searchParams).search;

  return (
    <div className="w-full md:p-4">
      {!search && (
        <>
          <div className="w-full py-2 pl-4">
            <Trendingpage />
          </div>
          <MaxWithWrapper>
            <Suspense fallback={<LoadCard />}>
              <RecommendPage />
            </Suspense>
          </MaxWithWrapper>
        </>
      )}
      {search && (
        <>
          <MaxWithWrapper>
            <Suspense fallback={<LoadCard />}>
              <FilterSection section={ESection.ALL} search={search} />
            </Suspense>
          </MaxWithWrapper>
        </>
      )}
    </div>
  );
}
