import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "@/components/LoginModal";
import hamburgerIcon from "/public/icons/hamburger-icon.png";
import closeIcon from "/public/icons/icons8-close-50.png";
import logo from "/public/icons/biospegeln.png";

type HamburgerMenuProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu: FC<HamburgerMenuProps> = ({ showModal, setShowModal }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        src={hamburgerIcon}
        alt="Menu icon"
        width={50}
        height={50}
        onClick={() => setMenuOpen(true)}
        className="hover:cursor-pointer lg:hidden mr-2"
      />
      {menuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-bg-color p-8 w-full h-full relative">
            <Image
              src={logo}
              alt="Spegeln Logo"
              className="w-24 absolute top-4 left-4"
            />
            <Image
              src={closeIcon}
              alt="Close icon"
              height={45}
              width={45}
              color="white"
              className="absolute right-6 top-8 hover:cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <ul className="flex flex-col gap-10 mt-20 items-center">
              <li>
                <button
                  className="text-2xl font-semibold"
                  onClick={() => setShowModal(true)}
                >
                  Login/Register
                </button>
              </li>
              {showModal && <LoginModal setShowModal={setShowModal} />}
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
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
