import { FC } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import MyPages from "./MyPages";
import Image from "next/image";
import logo from "../../public/icons/Logo.png";

//Still temporary code, will swap loggedIn for props from something like next-auth.
//Probably with useSession to get session data
const Header: FC<{ loggedIn: boolean }> = (loggedIn) => {
  return (
    <section>
      <header className="grid grid-cols-5 mt-6 ">
        <Link className="order-first justify-start ml-10" href="/">
          <Image src={logo} alt="Spegeln Logo" />
        </Link>

        <ul className="flex flex-row col-start-2 col-end-5 text-xl font-semibold justify-center mt-6 gap-14">
          <Link href="/">Öppettider & Kontakt</Link>
          <Link href="/">Om Spegeln</Link>
          <Link href="/">Biljettinfo</Link>
        </ul>

        {loggedIn.loggedIn ? <MyPages /> : <LoginModal />}
      </header>
    </section>
  );
};

export default Header;
