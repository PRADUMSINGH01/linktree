"use client";
import Link from "next/link";

const UserLink = ({ URL, URLName, bg, text }) => {
  return (
    <Link
      href={URL}
      className={
        bg
          ? `bg-${bg} w-full px-5 py-2 flex h-10 ${
              text ? `text-${text}` : "text-white"
            }`
          : "w-full px-5 py-2 flex h-10 bg-gray-400 text-white"
      }
    >
      {URLName}
    </Link>
  );
};

export default UserLink;
