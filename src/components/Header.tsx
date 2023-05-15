"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/Logo.png";
import LoginButton from "./LoginButton";

const Header: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setIsLoggedIn(!!user.token);
  }, []);

  const handleLogout = (): void => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
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

        {isLoggedIn ? (
          <MyPages handleLogout={handleLogout} />
        ) : (
          <LoginButton setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </section>
  );
};

export default Header;
