import React, { FC } from "react";
import Modal from "@/components/LoginModal";

interface LoginButtonProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginButton: FC<LoginButtonProps> = ({ setIsLoggedIn }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="text-lg font-semibold"
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
