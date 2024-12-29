"use server";

import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import connectDB from "@/config/database";
import usersModel from "@/models/usersModel";
import { lucia } from "@/config/auth";
import { cookies } from "next/headers";
import mongoose from "mongoose";

interface IFormSignup {
  username: string;
  password: string;
  confirmPassword: string;
}

export async function signup(_: any, formData: IFormSignup) {
  const username = formData.username;
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  await connectDB();

  const existingUser = await usersModel.findOne({ username: username });
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

  const newId = new mongoose.Types.ObjectId();
  console.log("New ObjectId:", newId);

  try {
    const user = await usersModel.create({
      _id: newId,
      username: username,
      password: hashedPassword,
    });

    const session = await lucia.createSession(user._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    console.log("error", e);
    return {
      error: "An unknown error occurred",
    };
  }
  redirect("/login");
}
