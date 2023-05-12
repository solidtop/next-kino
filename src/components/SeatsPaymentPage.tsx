import { FC } from "react";

type SeatsProps = {
  seat: number;
};

const SeatsPaymentPage: FC<SeatsProps> = ({ seat }) => {
  return (
    <li
      key={seat}
      className="ml-2 rounded bg-available w-6 h-6 mb-2 text-center">
      {seat}
    </li>
  );
};

export default SeatsPaymentPage;
