import { FC } from "react";
import Link from "next/link";

const MyPages: FC = () => {
  return (
    <Link
      href="/"
      className="order-last col-start-5 flex justify-end mr-10 mt-6 text-xl font-semibold">
      USERNAME
    </Link>
  );
};

export default MyPages;
