import { FC } from "react";
import TicketItem from "./TicketItem";
import { BookingDetails } from "@/types";

type TicketMenuProps = {
  bookingDetails: BookingDetails;
  onUpdate: (bookingDetails: BookingDetails) => void;
};

const TicketMenu: FC<TicketMenuProps> = ({ bookingDetails, onUpdate }) => {
  const tickets = bookingDetails.tickets;

  const handleTicketChange = (id: number, newQuantity: number): void => {
    const tickets = bookingDetails.tickets;
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
    );

    bookingDetails.tickets = updatedTickets;
    onUpdate({ ...bookingDetails, tickets: updatedTickets });
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
