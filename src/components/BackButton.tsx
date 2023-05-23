"use client";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import ChevronIcon from "/public/icons/chevron-left-solid.svg";

const BackButton: FC = () => {
  return (
    <div className="w-full px-4 pt-4 relative lg:p-0 lg:sticky lg-max-w-screen-xl top-0">
      <Link
        href="#"
        onClick={() => history.go(-1)}
        className="lg:absolute top-4 right-3/4 inline-flex items-center h-8 px-4 rounded lg:mx-20 bg-btn-primary-color hover:brightness-110">
        <Image src={ChevronIcon} alt="chevron left" className="w-2 mr-2" />
        Tillbaka
      </Link>
    </div>
  );
};

export default BackButton;
