import { FC } from "react";
import TicketItem from "./TicketItem";
import { BookingForm, Ticket } from "@/types";

type MenuProps = {
  onUpdate: (data: BookingForm) => void;
  tickets: Ticket[];
};

const TicketMenu: FC<MenuProps> = ({ onUpdate, tickets }) => {
  const handleTicketChange = (id: number, newQuantity: number): void => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
    );
    onUpdate({ tickets: updatedTickets });
  };

  return (
    <menu className="flex flex-col gap-y-2 bg-container-color p-4 rounded">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          onTicketChange={handleTicketChange}
        />
      ))}
    </menu>
  );
};

export default TicketMenu;
