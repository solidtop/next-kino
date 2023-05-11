import { BookingDetails, Screening, Ticket } from "@/types";

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidBookingDetails(
  request: BookingDetails,
  bookingDetails: BookingDetails
): boolean {
  /* Validate if request object has correct amount of keys */
  if (Object.keys(request).length !== Object.keys(bookingDetails).length) {
    return false;
  }

  /* Validate bookingId */
  if (request.id !== bookingDetails.id) {
    return false;
  }

  /* Validate screening */
  if (!isEqual(request.screening, bookingDetails.screening)) {
    return false;
  }

  /* Validate tickets */
  if (request.tickets.length !== bookingDetails.tickets.length) {
    return false;
  }

  for (let i = 0; i < request.tickets.length; i++) {
    const ticket = request.tickets[i];
    if (
      ticket.id !== bookingDetails.tickets[i].id ||
      ticket.type !== bookingDetails.tickets[i].type ||
      ticket.quantity < 0 ||
      ticket.quantity > 10
    ) {
      return false;
    }
  }

  return true;
}

function isEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function screeningHasStarted(screening: Screening): boolean {
  // const { start_time } = screening.attributes;
  // return new Date(start_time) < new Date();
  /* Return false for now since all screenings have already started */
  return false;
}

export function getAmountTotal(tickets: Ticket[]): number {
  return tickets.reduce((total, ticket) => {
    return total + ticket.price * ticket.quantity;
  }, 0);
}

export function getTicketsQuantity(tickets: Ticket[]): number {
  return tickets.reduce((total, ticket) => {
    return total + ticket.quantity;
  }, 0);
}
