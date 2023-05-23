"use client";
import { FC, useState, useEffect } from "react";
import Header from "@/components/Header";
import LoginModal from "@/components/LoginModal";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

const MyPagesContent: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [showModal]);

  return (
    <>
      <Header />
      <BackButton />
      <div className="mx-auto sm:w-[600px] w-96 p-4 mt-20">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="block w-full py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold"
        >
          Logga in / Bli medlem
        </button>
        {showModal && <LoginModal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default MyPagesContent;
