"use client";

import React, { useState } from "react";

import BookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import BookmarkFull from "@/assets/icon-bookmark-full.svg";
import Image from "next/image";
import { setBookmark } from "@/functions/functions";

const BookmarkButton = ({
  show,
  isBookmarked,
}: {
  show: string;
  isBookmarked: boolean;
}) => {
  const [bookmarkCheck, setBookmarkCheck] = useState(isBookmarked);

  return (
    <button
      className="ml-auto w-fit rounded-full bg-entertain-secondary/50 p-2"
      onClick={() => {
        setBookmarkCheck(!bookmarkCheck);
        setBookmark(show, !bookmarkCheck);
      }}
    >
      {!bookmarkCheck && (
        <Image src={BookmarkEmpty} alt="bookmark empty" className="m-auto" />
      )}
      {bookmarkCheck && (
        <Image src={BookmarkFull} alt="bookmark full" className="m-auto" />
      )}
    </button>
  );
};

export default BookmarkButton;
