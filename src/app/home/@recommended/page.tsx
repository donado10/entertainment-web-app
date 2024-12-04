import MaxWithWrapper from "@/components/MaxWithWrapper";
import TitleSection from "@/components/TitleSection";
import React from "react";
import { Cards as RecommendCards } from "@/components/recommended/Card";

const RecommendPage = () => {
  return (
    <section>
      <TitleSection title="Recommended for you" />
      <RecommendCards />
    </section>
  );
};

export default RecommendPage;
