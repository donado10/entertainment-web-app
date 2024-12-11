import React from "react";
import TitleSection from "./TitleSection";
import { ESection, Cards as SearchCards } from "./search/Card";
import { IData } from "@/interfaces/interfaces";
import { getData } from "@/functions/functions";

const dataToFilter = (data: IData[], section: ESection, payload: string) => {
  if (section === ESection.ALL) {
    return data.filter((d) =>
      d.title.toLowerCase().includes(payload.toLowerCase()),
    );
  }
  if (section === ESection.MOVIES) {
    return data
      .filter((d) => d.category.toLowerCase() === "movie")
      .filter((d) => d.title.toLowerCase().includes(payload.toLowerCase()));
  }
  if (section === ESection.SERIES) {
    return data
      .filter((d) => d.category.toLowerCase() === "tv series")
      .filter((d) => d.title.toLowerCase().includes(payload.toLowerCase()));
  }
  if (section === ESection.BOOKMARKS) {
    return data
      .filter((d) => d.isBookmarked)
      .filter((d) => d.title.toLowerCase().includes(payload.toLowerCase()));
  }

  return data;
};

const FilterSection = async ({
  section,
  search,
}: {
  section: ESection;
  search: string;
}) => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataToFilter(dataList, section, search);
  return (
    <div>
      <TitleSection title={`Found ${dataListFilter.length} for '${search}'`} />
      <SearchCards data={dataListFilter} />
    </div>
  );
};

export default FilterSection;
