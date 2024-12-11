import MaxWithWrapper from "@/components/MaxWithWrapper";
import React from "react";

const LoginPage = () => {
  return (
    <form className="">
      <MaxWithWrapper addClass="flex w-[25rem] flex-col gap-8 bg-entertain-secondary text-white p-8 rounded-xl ">
        <span className="text-3xl">Login</span>
        <div className="w-full">
          <MaxWithWrapper addClass="w-full border-b-2 border-gray-600 hover:border-white ">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-none py-2"
            />
          </MaxWithWrapper>
          <MaxWithWrapper addClass="w-full border-b-2 border-gray-600 hover:border-white">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-none py-2"
            />
          </MaxWithWrapper>
        </div>
        <button className="w-full rounded-xl bg-entertain-primary px-2 py-3 hover:bg-white hover:text-black">
          <span className="">Login to your account</span>
        </button>
        <p className="mx-auto">
          Don't have an account ?{" "}
          <button className="text-entertain-primary">Sign Up</button>
        </p>
      </MaxWithWrapper>
    </form>
  );
};

export default LoginPage;
