import { FC } from "react";

const SeatIndication: FC<any> = ({ seat }) => {
  return (
    <li
      key={seat}
      id={seat}
      className="flex justify-center items-center w-6 h-6 font-semibold bg-available rounded text-sm text-center"
    >
      {seat}
    </li>
  );
};

export default SeatIndication;
