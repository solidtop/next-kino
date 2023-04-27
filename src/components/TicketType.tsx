import { FC } from "react";

type TicketTypeProps = {
  type: {
    name: string;
    price: number;
    maxAmount: number;
  };
};

const TicketType: FC<TicketTypeProps> = ({ type }) => {
  return (
    <li className="grid grid-cols-3 items-center justify-items-center">
      <div className="justify-self-start">{type.name}</div>
      <div className="flex gap-x-4 items-center">
        <button className="w-10 h-10 bg-gray-700 rounded-full text-3xl hover:bg-gray-600">
          -
        </button>
        <p className="text-xl font-bold">2</p>
        <button className="w-10 h-10 bg-gray-700 rounded-full text-3xl hover:bg-gray-600">
          +
        </button>
      </div>
      <div className="justify-self-end">{type.price} kr</div>
    </li>
  );
};

export default TicketType;
