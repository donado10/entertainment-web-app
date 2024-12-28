"use client";

import MaxWithWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "./actions";

interface IFormValues {
  mail: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const response = await signup(null, {
      username: data.mail,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    console.log(response);
  };

  const inputClass = ` bg-none p-4 py-3 focus:border-white`;

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <MaxWithWrapper addClass="flex w-[25rem] flex-col gap-8 bg-entertain-secondary text-white p-8 rounded-xl ">
        <span className="text-3xl">Sign Up</span>
        <div className="w-full">
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
              <p className={`ml-auto text-[10px] text-entertain-primary`}>
                {errors.mail.message}
              </p>
            )}
          </MaxWithWrapper>
          <MaxWithWrapper
            addClass={`w-full   flex items-center gap-1 p-0 ${errors?.password && "border-b-2 border-entertain-primary"}`}
          >
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`${!errors?.password ? "w-full" : "w-3/5 border-entertain-primary"} ${!errors?.password && "border-b-2 border-gray-600"} ${inputClass}`}
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
          <MaxWithWrapper
            addClass={`w-full   flex items-center gap-1 p-0 ${errors?.confirmPassword && "border-b-2 border-entertain-primary"}`}
          >
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repeat Password"
              className={`${!errors?.confirmPassword ? "w-full" : "w-3/5 border-entertain-primary"} ${!errors?.confirmPassword && "border-b-2 border-gray-600"} ${inputClass}`}
              {...register("confirmPassword", {
                required: "Can't be empty",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors?.confirmPassword && (
              <p className="ml-auto text-[10px] text-entertain-primary">
                {errors.confirmPassword.message}
              </p>
            )}
          </MaxWithWrapper>
        </div>
        <button className="w-full rounded-xl bg-entertain-primary px-2 py-3 hover:bg-white hover:text-black">
          <span className="">Create an account</span>
        </button>
        <p className="mx-auto">
          Already have an account ?{" "}
          <Link href="/login" className="text-entertain-primary">
            Login
          </Link>
        </p>
      </MaxWithWrapper>
    </form>
  );
};

export default SignUpPage;
