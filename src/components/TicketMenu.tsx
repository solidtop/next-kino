import { FC, useState, useEffect } from "react";
import TicketItem from "./TicketItem";
import { BookingDetails, Ticket, User } from "@/types";

type TicketMenuProps = {
  bookingDetails: BookingDetails;
  onUpdate: (bookingDetails: BookingDetails) => void;
  userSession: User;
};

const TicketMenu: FC<TicketMenuProps> = ({
  bookingDetails,
  onUpdate,
  userSession,
}) => {
  const [tickets, setTickets] = useState<Ticket[]>(bookingDetails.tickets);

  useEffect(() => {
    setTickets(bookingDetails.tickets);
  }, [bookingDetails.tickets]);

  const handleTicketChange = (id: number, newQuantity: number): void => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
    );

    setTickets(updatedTickets);
    onUpdate({
      ...bookingDetails,
      tickets: updatedTickets,
      email: userSession.email,
    });
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
