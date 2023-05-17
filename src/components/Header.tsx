"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPagesMenu from "./MyPagesMenu";
import Image from "next/image";
import logo from "../../public/icons/biospegeln.png";
import LoginButton from "./LoginButton";
import { User } from "@/types";
import { useRouter } from "next/navigation";

const Header: FC<any> = () => {
  const [sessionDetails, setSessionDetails] = useState<User>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    getUserSession();
  }, [showModal]);

  const getUserSession = async () => {
    try {
      const res = await fetch("/api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = await res.json();
      setSessionDetails(payload);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = (): void => {
    console.log("TEST");
    const endUserSession = async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const payload = await res.json();
        setSessionDetails(payload);
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
    sessionDetails && (
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

        {sessionDetails.name !== "" ? (
          <MyPagesMenu
            handleLogout={handleLogout}
            sessionDetails={sessionDetails}
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
