import { FC, useState, useEffect } from "react";
import { stack as Menu } from "react-burger-menu";
import Link from "next/link";
import Modal from "./Modal";

type HamburgerMenuProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerIcon = () => (
  <div className="flex lg:hidden relative w-12">
    <svg
      className="w-12 h-12 text-white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

const HamburgerMenu: FC<HamburgerMenuProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="relative p-2 lg:hidden">
      <Menu
        noOverlay
        width={"100%"}
        customBurgerIcon={<HamburgerIcon />}
        className="left-0 top-0 bg-container-color p-10 rounded">
        <ul className="flex flex-col">
          <button
            className="flex lg:hidden text-xl font-semibold"
            onClick={() => setShowModal(true)}>
            Login/Register
          </button>
          {showModal && <Modal setShowModal={setShowModal} />}
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
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
