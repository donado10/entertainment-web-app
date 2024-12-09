"use client";

import React, { FormEventHandler, useRef } from "react";
import SearchIcon from "@/assets/icon-search.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Search = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const pathname = usePathname();

  const submitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    const text = inputRef.current.value;
    router.push(pathname + "/" + "?search=" + text);
    return;
  };

  return (
    <form
      className="flex w-full items-center justify-start gap-4 bg-transparent p-2 py-4"
      onSubmit={submitHandler as any}
    >
      <div>
        <Image src={SearchIcon} alt="search" />
      </div>
      <input
        type="text"
        className="w-3/4 bg-transparent text-white outline-none"
        placeholder="Search for movies or TV series"
        ref={inputRef}
      />
    </form>
  );
};

export default Search;
