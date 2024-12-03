import React from "react";
import SearchIcon from "@/assets/icon-search.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex w-full items-center justify-start gap-4 bg-transparent p-2 py-4">
      <div>
        <Image src={SearchIcon} alt="search" />
      </div>
      <input
        type="text"
        className="w-3/4 bg-transparent text-white outline-none"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default Search;
