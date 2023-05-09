import Link from "next/link";
import { FC } from "react";

const BackButton: FC = () => {
  return (
    <div className="w-full px-4 pt-4 relative lg:fixed lg:max-w-screen-xl lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
      <Link
        href="#"
        onClick={() => history.go(-1)}
        className="lg:absolute top-4 right-3/4 inline-flex items-center h-8 px-4 rounded lg:mx-10 bg-btn-primary-color hover:brightness-110"
      >
        <img
          src="/icons/chevron-left-solid.svg"
          alt="chevron left"
          className="w-2 mr-2"
        />
        Tillbaka
      </Link>
    </div>
  );
};

export default BackButton;
