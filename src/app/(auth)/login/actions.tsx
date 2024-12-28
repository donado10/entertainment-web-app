"use server";

import { lucia } from "@/config/auth";
import dbConnect from "@/config/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import userModel from "@/models/usersModel";

interface IFormSignin {
  username: string;
  password: string;
}

export async function login(_: any, formData: IFormSignin) {
  const username = formData.username;
  const password = formData.password;

  await dbConnect();
  const existingUser = await userModel.findOne({ username: username });

  if (!existingUser) {
    return {
      error: "Invalid credentials",
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.password,
    password,
  );

  if (!validPassword) {
    return {
      error: "Invalid credentials",
    };
  }

  const session = await lucia.createSession(existingUser._id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  redirect("/");
}
