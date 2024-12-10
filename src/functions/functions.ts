import connectDB from "@/config/database";
import moviesModel from "@/models/moviesModel";

import { IData } from "@/interfaces/interfaces";

export const getData = async () => {
  await connectDB();

  const data: IData[] = JSON.parse(JSON.stringify(await moviesModel.find()));
  return data;
};
