"use client";
import { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import MyPages from "./MyPages";

const Header: FC = () => {
  //This useState is only temporary, remove this and put it as a prop
  //once we start working on the login function
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <section>
      <header className="grid grid-cols-5 mt-6 ">
        <Link className="order-first justify-start ml-10" href="/">
          <img src="_next/static/public/Logo.png" alt="Spegeln Logo" />
        </Link>

        <ul className="flex flex-row col-start-2 col-end-5 text-xl font-semibold justify-center mt-6 gap-14">
          <Link href="/">Öppettider & Kontakt</Link>
          <Link href="/">Om Spegeln</Link>
          <Link href="/">Biljettinfo</Link>
        </ul>

        {loggedIn ? <MyPages /> : <LoginModal />}
      </header>
    </section>
  );
};

export default Header;
