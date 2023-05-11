import React, { FC, useState } from "react";
import Modal from "./Modal";

interface LoginButtonProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginButton: FC<LoginButtonProps> = ({ setIsLoggedIn }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="order-last col-start-5 flex justify-end mr-10 mt-6 text-xl font-semibold"
        onClick={() => setShowModal(true)}
      >
        Login/Register
      </button>
      {showModal && (
        <Modal setShowModal={setShowModal} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default LoginButton;
