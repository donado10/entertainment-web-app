import Header from "@/components/Header";
import Search from "@/components/Search";
import Trendingpage from "./home/@trending/page";
import RecommendPage from "./home/@recommended/page";
import MaxWithWrapper from "@/components/MaxWithWrapper";

export default function Home() {
  return (
    <div className="w-full md:p-4">
      <div>
        <Header />
      </div>
      <MaxWithWrapper>
        <Search />
      </MaxWithWrapper>
      <div className="w-full py-2 pl-4">
        <Trendingpage />
      </div>
      <MaxWithWrapper>
        <RecommendPage />
      </MaxWithWrapper>
    </div>
  );
}
