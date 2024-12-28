"use client";

import React from "react";
import Logo from "@/assets/logo.svg";
import NavHome from "@/assets/icon-nav-home.svg";
import NavHomeActive from "@/assets/icon-nav-home-active.svg";
import NavMovies from "@/assets/icon-nav-movies.svg";
import NavMoviesActive from "@/assets/icon-nav-movies-active.svg";
import NavBookmark from "@/assets/icon-nav-bookmark.svg";
import NavBookmarkActive from "@/assets/icon-nav-bookmark-active.svg";
import NavTV from "@/assets/icon-nav-tv-series.svg";
import NavTVActive from "@/assets/icon-nav-tv-series-active.svg";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery, { EMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { GrLogout } from "react-icons/gr";
import { logout } from "@/app/(app)/actions";

const href_param = {
  home_ref: "/",
  movies_ref: "/movies",
  series_ref: "/series",
  bookmarks_ref: "/bookmarks",
};

const HeaderMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="grid w-full grid-cols-8 items-center p-2">
      <div className="col-span-1">
        <Link href={href_param.home_ref}>
          <Image src={Logo} alt="Movie logo" />
        </Link>
      </div>
      <div className="col-start-3 col-end-4">
        {pathname === "/" ? (
          <Link href={href_param.home_ref}>
            <Image src={NavHomeActive} alt="nav home" className={"m-auto"} />
          </Link>
        ) : (
          <Link href={href_param.home_ref}>
            <Image src={NavHome} alt="nav home" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="col-start-4 col-end-5">
        {pathname === "/movies" ? (
          <Link href={href_param.movies_ref}>
            <Image
              src={NavMoviesActive}
              alt="nav movies"
              className={"m-auto"}
            />
          </Link>
        ) : (
          <Link href={href_param.movies_ref}>
            <Image src={NavMovies} alt="nav movies" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="col-start-5 col-end-6">
        {pathname === "/series" ? (
          <Link href={href_param.series_ref}>
            <Image src={NavTVActive} alt="nav tv" className={"m-auto"} />
          </Link>
        ) : (
          <Link href={href_param.series_ref}>
            <Image src={NavTV} alt="nav tv" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="col-start-6 col-end-7">
        {pathname === "/bookmarks" ? (
          <Link href={href_param.bookmarks_ref}>
            <Image
              src={NavBookmarkActive}
              alt="nav bookmark"
              className={"m-auto"}
            />
          </Link>
        ) : (
          <Link href={href_param.bookmarks_ref}>
            <Image src={NavBookmark} alt="nav bookmark" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="col-start-8 col-end-9 flex items-center gap-3">
        {/* <div className="border-white-900 ml-auto aspect-square w-8 overflow-hidden rounded-full border-2">
          <Image
            src={Profile}
            width={30}
            height={30}
            alt="Profile"
            className="bg-white"
          />
        </div> */}
        <div className="">
          <GrLogout className="h-[30px] w-[30px] text-white" />
        </div>
      </div>
    </nav>
  );
};
const HeaderBig = () => {
  const pathname = usePathname();

  return (
    <nav className="grid w-fit grid-cols-1 grid-rows-20 items-center">
      <div className="row-span-1">
        <Link href={href_param.home_ref}>
          <Image src={Logo} alt="Movie logo" />
        </Link>
      </div>
      <div className="row-start-4 row-end-5">
        {pathname === "/" ? (
          <Link href={href_param.home_ref}>
            <Image src={NavHomeActive} alt="nav home" className={"m-auto"} />
          </Link>
        ) : (
          <Link href={href_param.home_ref}>
            <Image src={NavHome} alt="nav home" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="row-start-6 row-end-7">
        {pathname === "/movies" ? (
          <Link href={href_param.movies_ref}>
            <Image
              src={NavMoviesActive}
              alt="nav movies"
              className={"m-auto"}
            />
          </Link>
        ) : (
          <Link href={href_param.movies_ref}>
            <Image src={NavMovies} alt="nav movies" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="row-start-8 row-end-9">
        {pathname === "/series" ? (
          <Link href={href_param.series_ref}>
            <Image src={NavTVActive} alt="nav tv" className={"m-auto"} />
          </Link>
        ) : (
          <Link href={href_param.series_ref}>
            <Image src={NavTV} alt="nav tv" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="row-start-10 row-end-11">
        {pathname === "/bookmarks" ? (
          <Link href={href_param.bookmarks_ref}>
            <Image
              src={NavBookmarkActive}
              alt="nav bookmark"
              className={"m-auto"}
            />
          </Link>
        ) : (
          <Link href={href_param.bookmarks_ref}>
            <Image src={NavBookmark} alt="nav bookmark" className={"m-auto"} />
          </Link>
        )}
      </div>
      <div className="row-start-[20] -row-end-1">
        <button onClick={async () => await logout()} className="cursor-pointer">
          <GrLogout className="h-[30px] w-[30px] text-white" />
        </button>
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
        <div className="w-full bg-entertain-secondary md:rounded-md">
          <HeaderMobile />
        </div>
      )}
      {isBig && (
        <div className="h-screen-[90vh] w-fit bg-entertain-secondary p-4 md:rounded-md">
          <HeaderBig />
        </div>
      )}
    </>
  );
};

export default Header;
