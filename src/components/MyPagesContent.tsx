"use client";
import { FC, useState, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import BackButton from "./BackButton";
import { useSelector } from "react-redux";
import { selectValue } from "@/app/GlobalRedux/Features/userSlice";

const MyPagesContent: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const loggedIn = useSelector(selectValue);
  const { push } = useRouter();

  useEffect(() => {
    if (loggedIn == true) {
      push("/myPages");
    }
  }, [loggedIn]);
  return (
    <>
      <Header />
      <BackButton />
      <div className="mx-auto sm:w-[600px] w-96 p-4 mt-20">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="block w-full py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
          Logga in / Bli medlem
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default MyPagesContent;
