"use client";

import React from "react";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Logo from "@/assets/logo.svg";
import NavHome from "@/assets/icon-nav-home.svg";
import NavMovies from "@/assets/icon-nav-movies.svg";
import NavBookmark from "@/assets/icon-nav-bookmark.svg";
import NavTV from "@/assets/icon-nav-tv-series.svg";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/assets/icon-profile.png";
import useMediaQuery, { EMediaQuery } from "@/hooks/useMediaQuery";

const HeaderMobile = () => {
  return (
    <nav className="grid w-full grid-cols-8 items-center p-2">
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
        <div className="border-white-900 ml-auto aspect-square w-8 overflow-hidden rounded-full border-2">
          <Image
            src={Profile}
            width={30}
            height={30}
            alt="Profile"
            className="bg-white"
          />
        </div>
      </div>
    </nav>
  );
};
const HeaderBig = () => {
  return (
    <nav className="grid-rows-20 grid w-fit grid-cols-1 items-center p-2">
      <div className="row-span-1">
        <Link href="#">
          <Image src={Logo} alt="Movie logo" />
        </Link>
      </div>
      <div className="row-start-4 row-end-5">
        <Link href="#">
          <Image src={NavHome} alt="nav home" className="m-auto" />
        </Link>
      </div>
      <div className="row-start-6 row-end-7">
        <Link href="#">
          <Image src={NavMovies} alt="nav movies" className="m-auto" />
        </Link>
      </div>
      <div className="row-start-8 row-end-9">
        <Link href="#">
          <Image src={NavTV} alt="nav tv" className="m-auto" />
        </Link>
      </div>
      <div className="row-start-10 row-end-11">
        <Link href="#">
          <Image src={NavBookmark} alt="nav bookmark" className="m-auto" />
        </Link>
      </div>
      <div className="row-start-[20] row-end-[21]">
        <Link
          href="#"
          className="border-white-900 ml-auto block aspect-square w-8 overflow-hidden rounded-full border-2"
        >
          <Image
            src={Profile}
            width={30}
            height={30}
            alt="Profile"
            className="bg-white"
          />
        </Link>
      </div>
    </nav>
  );
};

const Header = () => {
  const isMobile = useMediaQuery(EMediaQuery.MOBILE);
  const isBig = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {isMobile && !isBig && (
        <MaxWithWrapper addClass="bg-entertain-secondary w-full md:rounded-md">
          <HeaderMobile />
        </MaxWithWrapper>
      )}
      {isBig && (
        <MaxWithWrapper addClass="bg-entertain-secondary w-fit h-screen md:rounded-md">
          <HeaderBig />
        </MaxWithWrapper>
      )}
    </>
  );
};

export default Header;
