"use client";
import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { loginUser } from "@/utils/api";
type SetShowModal = React.Dispatch<React.SetStateAction<boolean>>;

interface ModalProps {
  setShowModal: SetShowModal;
}

const Modal: FC<ModalProps> = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = (): void => {
    const user = { email, password };
    loginUser(user);
  };
  return (
    <div className="container bg-blue-500">
      <form onSubmit={handleUserLogin} className="bg-dark-500 w-100 ">
        <div className="user-form">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            placeholder="Ange e-postadress"
            /*  className="block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"*/
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </div>
        <div className="user-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Ange losenord"
            /*  className="block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"*/
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
        </div>
      </form>
      <p>
        You dont'have an Account? Please <Link href="/register">Register</Link>
      </p>
      <div>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
