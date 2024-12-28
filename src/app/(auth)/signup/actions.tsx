"use server";

import { lucia } from "@/config/auth";
import dbConnect from "@/config/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import userModel from "@/models/usersModel";

interface IFormSignup {
  username: string;
  password: string;
  confirmPassword: string;
}

export async function signup(_: any, formData: IFormSignup) {
  const username = formData.username;
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  const existingUser = await userModel.findOne({ username: username });
  if (existingUser) {
    return {
      error: "User already exists",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  const hashedPassword = await new Argon2id().hash(password);

  try {
    await dbConnect();
    const user = await userModel.create({
      username: username,
      password: hashedPassword,
    });

    /* const session = await lucia.createSession(user._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    ); */
  } catch (e) {
    console.log("error", e);
    return {
      error: "An unknown error occurred",
    };
  }
  redirect("/login");
}
