import { FC, useState, useEffect } from "react";
import TicketItem from "./TicketItem";
import { BookingDetails, Ticket } from "@/types";

type TicketMenuProps = {
  bookingDetails: BookingDetails;
  onUpdate: (bookingDetails: BookingDetails) => void;
  loadSeating: (bookingDetails: BookingDetails) => void;
};

const TicketMenu: FC<TicketMenuProps> = ({
  bookingDetails,
  onUpdate,
  loadSeating,
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
    onUpdate({ ...bookingDetails, tickets: updatedTickets });
  };

  return (
    <menu className="flex flex-col gap-y-2 bg-container-color p-4 rounded">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          onTicketChange={handleTicketChange}
          bookingDetails={bookingDetails}
          onLoadSeating={loadSeating}
        />
      ))}
    </menu>
  );
};

export default TicketMenu;
