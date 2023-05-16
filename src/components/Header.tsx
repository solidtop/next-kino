"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/Logo.png";
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
      <section className="container mx-auto my-4 max-w-6xl">
        <header className="flex justify-between gap-4">
          <Link className="order-first justify-start ml-10" href="/">
            <Image src={logo} alt="Spegeln Logo" className="object-contain" />
          </Link>

          <ul className="hidden lg:flex flex-row text-xl font-semibold justify-center items-center gap-14">
            <Link href="/">Öppettider & Kontakt</Link>
            <Link href="/">Om Spegeln</Link>
            <Link href="/">Biljettinfo</Link>
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
      </section>
    )
  );
};

export default Header;
