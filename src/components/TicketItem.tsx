import { useState, FC } from "react";
import { Ticket } from "@/types";

type TicketItemProps = {
  ticket: Ticket;
  onTicketChange: (id: number, newQuantity: number) => void;
};

const TicketItem: FC<TicketItemProps> = ({ ticket, onTicketChange }) => {
  const [quantity, setQuantity] = useState<number>(ticket.quantity);

  return (
    <li className="grid grid-cols-3 items-center justify-items-center">
      <div className="justify-self-start">{ticket.type}</div>
      <div className="flex items-center">
        <button
          type="button"
          className="w-10 h-10 bg-gray-700 rounded-full text-3xl enabled:hover:bg-gray-600 disabled:opacity-50"
          onClick={() => {
            setQuantity(quantity - 1);
            onTicketChange(ticket.id, quantity - 1);
          }}
          disabled={quantity === 0}
        >
          <img
            src="/icons/minus-solid.svg"
            alt="minus"
            className="w-5 m-auto"
          />
        </button>
        <p className="text-xl font-bold text-center w-8 md:w-14">{quantity}</p>
        <button
          type="button"
          className="w-10 h-10 bg-gray-700 rounded-full text-3xl enabled:hover:bg-gray-600 disabled:opacity-50"
          onClick={() => {
            setQuantity(quantity + 1);
            onTicketChange(ticket.id, quantity + 1);
          }}
          disabled={quantity === ticket.maxQuantity}
        >
          <img src="/icons/plus-solid.svg" alt="plus" className="w-5 m-auto" />
        </button>
      </div>
      <div className="justify-self-end">{ticket.price} kr</div>
    </li>
  );
};

export default TicketItem;
