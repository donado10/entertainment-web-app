"use client";

import MaxWithWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormValues {
  mail: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <MaxWithWrapper addClass="flex w-[25rem] flex-col gap-8 bg-entertain-secondary text-white p-8 rounded-xl ">
        <span className="text-3xl">Login</span>
        <div className="w-full">
          <MaxWithWrapper addClass="w-full border-b-2 border-gray-600 hover:border-white flex items-center gap-1">
            <input
              id="mail"
              type="email"
              placeholder="Email address"
              className={`${!errors?.mail ? "w-full" : "w-3/5"} bg-none py-2`}
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
          <MaxWithWrapper addClass="w-full border-b-2 border-gray-600 hover:border-white flex items-center gap-1">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`${!errors?.password ? "w-full" : "w-3/5"} bg-none py-2`}
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
        <button className="w-full rounded-xl bg-entertain-primary px-2 py-3 hover:bg-white hover:text-black">
          <span className="">Login to your account</span>
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

export default LoginPage;
