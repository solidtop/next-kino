import React, { FC } from "react";
import LoginModal from "@/components/LoginModal";

type LoginButtonProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginButton: FC<LoginButtonProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      <button
        className="text-lg font-semibold"
        onClick={() => setShowModal(true)}
      >
        Login/Register
      </button>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </>
  );
};

export default LoginButton;
