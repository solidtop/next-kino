"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/biospegeln.png";
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
    <header className="flex justify-between items-center gap-4 container mx-auto my-4 px-4 pb-4 max-w-6xl border-b-2 border-white border-opacity-10">
      <Link className="order-first justify-start" href="/">
        <Image src={logo} alt="Spegeln Logo" width={96} className="w-24" />
      </Link>

      <ul className="hidden lg:flex flex-row text-lg font-semibold justify-center items-center gap-14">
        <li>
          <Link href="/information/contact">Öppettider & Kontakt</Link>
        </li>
        <li>
          <Link href="/information/about">Om Spegeln</Link>
        </li>
        <li>
          <Link href="/information/tickets">Biljettinfo</Link>
        </li>
      </ul>

      {isLoggedIn ? (
        <MyPages handleLogout={handleLogout} />
      ) : (
        <LoginButton setIsLoggedIn={setIsLoggedIn} />
      )}
    </header>
  );
};

export default Header;
