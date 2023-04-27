"use client";

import { FC } from "react";
import TicketType from "./TicketType";

type Type = {
  name: string;
  price: number;
  maxAmount: number;
};

type TicketTypeMenuProps = {
  types: Type[];
};

const TicketTypeMenu: FC<TicketTypeMenuProps> = ({ types }) => {
  return (
    <menu className="flex flex-col gap-y-2 bg-container-color p-4 rounded">
      {types.map((type, index) => (
        <TicketType key={index} type={type}></TicketType>
      ))}
    </menu>
  );
};

export default TicketTypeMenu;
