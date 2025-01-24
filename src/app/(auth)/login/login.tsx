"use client";

import MaxWithWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "./actions";
import { getCookie, getCookies } from "cookies-next";

interface IFormValues {
  mail: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    login(null, { username: data.mail, password: data.password });
  };

  const inputClass = ` bg-none p-4 py-3 focus:border-white`;

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <MaxWithWrapper addClass="flex w-[25rem] flex-col gap-8 bg-entertain-secondary text-white p-8 rounded-xl ">
        <span className="text-3xl">Login</span>
        <div className="flex w-full flex-col gap-4">
          <MaxWithWrapper
            addClass={`w-full   flex items-center gap-1 p-0 ${errors?.mail && "border-b-2 border-entertain-primary"}`}
          >
            <input
              id="mail"
              type="email"
              placeholder="Email address"
              className={`${!errors?.mail ? "w-full" : "w-3/5"} ${!errors?.mail && "border-b-2 border-gray-600"} ${inputClass}`}
              {...register("mail", {
                required: "Can't be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "please enter a valid email",
                },
              })}
            />
            {errors?.mail && (
              <p className="ml-auto text-[10px] text-entertain-primary">
                {errors.mail.message}
              </p>
            )}
          </MaxWithWrapper>
          <MaxWithWrapper
            addClass={`w-full   flex items-center gap-1 p-0  ${errors?.password && "border-b-2 border-entertain-primary "}`}
          >
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`${!errors?.password ? "w-full" : "w-3/5"} ${!errors?.password && "border-b-2 border-gray-600"} ${inputClass}`}
              {...register("password", {
                required: "Can't be empty",
              })}
            />
            {errors?.password && (
              <p className="ml-auto text-[10px] text-entertain-primary">
                {errors.password.message}
              </p>
            )}
          </MaxWithWrapper>
        </div>
        <button className="w-full rounded-md bg-entertain-primary px-2 py-3 hover:bg-white hover:text-black">
          <span className="font-light">Login to your account</span>
        </button>
        <p className="mx-auto">
          Don't have an account ?{" "}
          <Link href="/signup" className="text-entertain-primary">
            Sign Up
          </Link>
        </p>
      </MaxWithWrapper>
    </form>
  );
};

export default Login;
