"use server";

import { lucia, validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IData } from "@/interfaces/interfaces";
import { getData } from "@/functions/functions";
import { Card } from "@/components/trending/Card";

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

export const Cards = async () => {
  const dataList: IData[] = await getData();

  const dataListFilter = dataList.filter((data) => data.isTrending);

  return (
    <ul className="mt-4 flex w-full items-center gap-8 overflow-x-scroll">
      {dataListFilter.map((data, i) => (
        <li key={i}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
};
