<<<<<<< HEAD
import { FC } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/Logo.png";
=======
'use client'

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import MyPages from "./MyPages";
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
>>>>>>> 76dac6458db6825b271dc685297462a6f4609d24

  return (
    <section>
<<<<<<< HEAD
      <header className="grid grid-cols-5 mt-6 ">
        <Link className="order-first justify-start ml-10" href="/">
          <Image src={logo} alt="Spegeln Logo" />
=======
      <header className="grid grid-cols-5 mt-6">
        <Link href="/" className="order-first justify-start ml-10">
          <img src="_next/static/public/Logo.png" alt="Spegeln Logo" />
>>>>>>> 76dac6458db6825b271dc685297462a6f4609d24
        </Link>

        <ul className="flex flex-row col-start-2 col-end-5 text-xl font-semibold justify-center mt-6 gap-14">
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
