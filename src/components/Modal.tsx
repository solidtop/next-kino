"use client";

import { useState, FC, FormEvent, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { loginUser } from "@/utils/api";

interface ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ setShowModal }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserLogin = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    console.log(email, password);
    const user = { email, password };
    loginUser(user);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-6  text-black-800 ">Login</h2>
        <form onSubmit={handleUserLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ange e-postadress"
              value={email}
              onChange={(ev: FormEvent<HTMLInputElement>) => {
                setEmail(ev.currentTarget.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ange lösenord"
              value={password}
              onChange={(ev: FormEvent<HTMLInputElement>) => {
                setPassword(ev.currentTarget.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? Please <Link href="/register">Register</Link>
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
