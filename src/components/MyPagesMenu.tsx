import React, { FC, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import userIcon from "../../public/icons/user-solid.svg";
import Link from "next/link";
import { User } from "@/types";

interface MyPagesMenuProps {
  handleLogout: () => void;
  sessionDetails: User;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const MyPagesMenu: FC<MyPagesMenuProps> = ({
  handleLogout,
  sessionDetails,
  toggleDropdown,
  isOpen,
}) => {
  return (
    <div className="relative z-10">
      <div className="flex items-center gap-2">
        <Image src={userIcon} alt="user icon" width={16} />
        <button
          className="flex justify-end text-lg font-semibold"
          onClick={toggleDropdown}>
          {sessionDetails.name} <RiArrowDownSLine className="ml-1 mt-1" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-30 mt-2 bg-container-color rounded shadow-md">
          <Link
            href={"/myPages"}
            className="block px-4 py-2  text-white-800 rounded  hover:bg-white hover:bg-opacity-10 text-left">
            Mina sidor
          </Link>
          <button
            className="block px-4 py-2 w-full text-white-800 rounded hover:bg-white hover:bg-opacity-10 text-left"
            onClick={handleLogout}>
            Logga ut
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPagesMenu;
