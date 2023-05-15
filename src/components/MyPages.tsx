import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

interface MyPagesProps {
  handleLogout: () => void;
}

const MyPages: FC<MyPagesProps> = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};
  const router = useRouter();

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      <button
        className="order-last col-start-5 flex justify-end mr-10 mt-6 text-xl font-semibold"
        onClick={toggleDropdown}>
        {user.name} <RiArrowDownSLine className="ml-1 mt-1" />
      </button>
      {isOpen && (
        <div className="absolute right-30 mt-2 bg-container-color rounded shadow-md">
          {user.name && (
            <Link
              href={"/myPages"}
              className="block px-4 py-2  text-white-800 rounded  hover:bg-white hover:bg-opacity-10 text-left">
              Mina sidor
            </Link>
          )}
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

export default MyPages;
