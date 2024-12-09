import Trendingpage from "./home/@trending/page";
import RecommendPage from "./home/@recommended/page";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import FilterSection from "@/components/Filter";
import { ESection } from "@/components/search/Card";

interface Params {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: Params) {
  const search = (await searchParams).search;

  return (
    <div className="w-full md:p-4">
      {!search && (
        <>
          <div className="w-full py-2 pl-4">
            <Trendingpage />
          </div>
          <MaxWithWrapper>
            <RecommendPage />
          </MaxWithWrapper>
        </>
      )}
      {search && (
        <>
          <MaxWithWrapper>
            <FilterSection section={ESection.ALL} search={search} />
          </MaxWithWrapper>
        </>
      )}
    </div>
  );
}
