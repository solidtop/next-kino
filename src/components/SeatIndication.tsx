import { FC } from "react";

const SeatIndication: FC<any> = ({ seat }) => {
  return (
    <p className="font-bold ml-2 bg-available rounded p-1 text-sm">{seat}</p>
  );
};

export default SeatIndication;
