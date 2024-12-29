"use server";

import connectDB from "@/config/database";
import moviesModel from "@/models/moviesModel";

import { IData } from "@/interfaces/interfaces";
import usersModel from "@/models/usersModel";
import sessionsModel from "@/models/sessionsModel";
import { cookies } from "next/headers";
import { lucia } from "@/config/auth";

export const getData = async () => {
  await connectDB();

  const data: IData[] = JSON.parse(JSON.stringify(await moviesModel.find()));

  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;
  const user_session = await sessionsModel.findById(sessionId);

  const user = await usersModel.findOne({ _id: user_session?.user_id });

  data.forEach((d) => {
    if (user?.bookmarks.includes(d.title)) {
      d.isBookmarked = true;
    }
  });

  return data;
};

export const setBookmark = async (show: string, isBookmarked: boolean) => {
  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  const user_session = await sessionsModel.findById(sessionId);

  const user = await usersModel.findOne({ _id: user_session?.user_id });

  if (isBookmarked) {
    await usersModel.updateOne(
      { _id: user?._id },
      { $set: { bookmarks: [...user.bookmarks, show] } },
    );
  } else {
    await usersModel.updateOne(
      { _id: user?._id },
      { $set: { bookmarks: user.bookmarks.filter((b: string) => b !== show) } },
    );
  }
  // await moviesModel.updateMany({}, { $set: { isBookmarked: false } });
};

export const simulateDelay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
