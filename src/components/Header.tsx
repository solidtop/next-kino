"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/biospegeln.png";
import LoginButton from "./LoginButton";
import { User } from "@/types";

const Header: FC = () => {
  const [sessionDetails, setSessionDetails] = useState<User>();

  useEffect(() => {
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

    getUserSession();
  }, []);

  const handleLogout = (): void => {
    const endUserSession = async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const payload = await res.json();
        console.log(payload);

        setSessionDetails(payload);
      } catch (err) {
        console.log(err);
      }
    };

    endUserSession();
  };

  console.log(sessionDetails);
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
          <MyPages
            handleLogout={handleLogout}
            sessionDetails={sessionDetails}
          />
        ) : (
          <LoginButton />
        )}
      </header>
    )
  );
};

export default Header;
