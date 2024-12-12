"use server";

import connectDB from "@/config/database";
import moviesModel from "@/models/moviesModel";

import { IData } from "@/interfaces/interfaces";

export const getData = async () => {
  await connectDB();

  const data: IData[] = JSON.parse(JSON.stringify(await moviesModel.find()));
  return data;
};

export const setBookmark = async (show: string, isBookmarked: boolean) => {
  await moviesModel.updateOne(
    { title: show },
    { $set: { isBookmarked: isBookmarked } },
  );
};

export const simulateDelay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
