'use client'

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
import LoginModal from "./LoginModal";

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
    <section>
      <header className="grid grid-cols-5 mt-6">
        <Link href="/" className="order-first justify-start ml-10">
          <img src="_next/static/public/Logo.png" alt="Spegeln Logo" />
        </Link>

        <ul className="flex flex-row col-start-2 col-end-5 text-xl font-semibold justify-center mt-6 gap-14">
          <Link href="/">Öppettider & Kontakt</Link>
          <Link href="/">Om Spegeln</Link>
          <Link href="/">Biljettinfo</Link>
        </ul>

        {isLoggedIn ? (
          <MyPages handleLogout={handleLogout} />
        ) : (
          <LoginModal setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </section>
  );
};

export default Header;
