"use server";

import { lucia, validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IData } from "@/interfaces/interfaces";
import { getData } from "@/functions/functions";
import { CardsLayout } from "@/components/Layouts";
import { LargeCard, MediumCard } from "@/components/Card";

export async function logout() {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/login");
}

export const TrendingCards = async () => {
  const dataList: IData[] = await getData();

  const dataListFilter = dataList.filter((data) => data.isTrending);

  return (
    <ul className="mt-4 flex w-full items-center gap-8 overflow-x-scroll">
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <LargeCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export const RecommendedCards = async () => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter((data) => !data.isTrending);
  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <MediumCard data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};
export const MoviesCards = async () => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter(
    (data) => data.category.toLocaleLowerCase() === "movie",
  );
  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <MediumCard data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};

export const SeriesCards = async () => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter(
    (data) => data.category.toLocaleLowerCase() === "tv series",
  );
  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <MediumCard data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};

export const BookmarkSeriesCards = async () => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter(
    (data) => data.isBookmarked && data.category === "TV Series",
  );

  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <MediumCard data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};

export const BookmarkMoviesCards = async () => {
  const dataList: IData[] = await getData();
  const dataListFilter = dataList.filter(
    (data) => data.isBookmarked && data.category === "Movie",
  );
  return (
    <CardsLayout>
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <MediumCard data={data} />
        </li>
      ))}
    </CardsLayout>
  );
};
