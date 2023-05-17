"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPagesMenu from "./MyPagesMenu";
import Image from "next/image";
import logo from "../../public/icons/biospegeln.png";
import LoginButton from "./LoginButton";
import { User } from "@/types";
import { getUserSession } from "@/utils/api";
import { useRouter } from "next/navigation";

const Header: FC<any> = () => {
  const [userDetails, setUserDetails] = useState<User>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    handleSession();
  }, [showModal]);

  useEffect(() => {
    router.refresh();
  }, [userDetails]);

  const handleSession = async () => {
    try {
      const payload = await getUserSession();
      setUserDetails(payload);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = (): void => {
    const endUserSession = async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          setUserDetails({ email: "", name: "" });
        } else {
          throw new Error("Logout failed");
        }
      } catch (err) {
        console.log(err);
      }
    };

    endUserSession();
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    userDetails && (
      <header className="flex justify-between items-center gap-4 container mx-auto my-4 px-4 pb-4 max-w-6xl border-b-2 border-white border-opacity-10">
        <Link className="order-first justify-start" href="/">
          <Image src={logo} alt="Spegeln Logo" className="w-24" />
        </Link>

        <ul className="hidden lg:flex flex-row text-lg font-semibold justify-center items-center gap-14">
          <li>
            <Link href="/">Öppettider & Kontakt</Link>
          </li>
          <li>
            <Link href="/">Om Spegeln</Link>
          </li>
          <li>
            <Link href="/">Biljettinfo</Link>
          </li>
        </ul>

        {userDetails.name !== "" ? (
          <MyPagesMenu
            handleLogout={handleLogout}
            userDetails={userDetails}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
          />
        ) : (
          <LoginButton showModal={showModal} setShowModal={setShowModal} />
        )}
      </header>
    )
  );
};

export default Header;
