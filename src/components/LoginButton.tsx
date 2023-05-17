import React, { FC } from "react";
import Modal from "./Modal";

type LoginButtonProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginButton: FC<LoginButtonProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      <button
        className="order-last col-start-5 flex justify-end mr-10 text-xl font-semibold"
        onClick={() => setShowModal(true)}>
        Login/Register
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default LoginButton;
