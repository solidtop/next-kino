import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";

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
    <div className="relative">
      <button
        className="order-last col-start-5 flex justify-end mr-10 mt-6 text-xl font-semibold"
        onClick={toggleDropdown}
      >
        {user.name} <RiArrowDownSLine className="ml-1 mt-1" />
      </button>
      {isOpen && (
        <div className="absolute right-30 mt-2 bg-container-color rounded shadow-md">
          {user.name && (
            <a
              href="/"
              className="block px-4 py-2  text-white-800  hover:bg-bg-color"
              onClick={(e) => {
                e.preventDefault();
                router.push("/"); // Redirect to home page on username click
              }}
            >
              {user.name}
            </a>
          )}
          <button
            className="block px-4 py-2  text-white-800 hover:bg-bg-color"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPages;
