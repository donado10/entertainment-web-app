import React from "react";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Logo from "@/assets/logo.svg";
import NavHome from "@/assets/icon-nav-home.svg";
import NavMovies from "@/assets/icon-nav-movies.svg";
import NavBookmark from "@/assets/icon-nav-bookmark.svg";
import NavTV from "@/assets/icon-nav-tv-series.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <MaxWithWrapper addClass="bg-entertain-secondary w-full ">
      <header className="grid w-full grid-cols-8 items-center p-4">
        <div className="col-span-1">
          <Link href="#">
            <Image src={Logo} alt="Movie logo" />
          </Link>
        </div>
        <div className="col-start-3 col-end-4">
          <Link href="#">
            <Image src={NavHome} alt="nav home" className="m-auto" />
          </Link>
        </div>
        <div className="col-start-4 col-end-5">
          <Link href="#">
            <Image src={NavMovies} alt="nav movies" className="m-auto" />
          </Link>
        </div>
        <div className="col-start-5 col-end-6">
          <Link href="#">
            <Image src={NavTV} alt="nav tv" className="m-auto" />
          </Link>
        </div>
        <div className="col-start-6 col-end-7">
          <Link href="#">
            <Image src={NavBookmark} alt="nav bookmark" className="m-auto" />
          </Link>
        </div>
        <div className="col-start-8 col-end-9">
          <Image src={Logo} alt="Movie logo" className="ml-auto self-end" />
        </div>
      </header>
    </MaxWithWrapper>
  );
};

export default Header;
