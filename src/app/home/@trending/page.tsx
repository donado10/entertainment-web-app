import MaxWithWrapper from "@/components/MaxWithWrapper";
import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as TrendingCards } from "@/components/trending/Card";

const Trendingpage = () => {
  return (
    <section>
      <TitleSection title="Trending" />
      <TrendingCards />
    </section>
  );
};

export default Trendingpage;
