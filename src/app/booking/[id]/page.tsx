import BookingSummary from "@/components/BookingSummary";
import TicketTypeMenu from "@/components/TicketTypeMenu";
import * as api from "../../../utils/api";

const types = [
  {
    name: "Ordinarie",
    price: 135,
    maxAmount: 5,
  },
  {
    name: "Pensionär",
    price: 100,
    maxAmount: 5,
  },
  {
    name: "Student",
    price: 100,
    maxAmount: 5,
  },
];

export default async function Booking() {
  const screenings = await api.getScreenings();
  const booking = {
    id: 0,
    pricing: {
      amountTotal: 270,
    },
    screening: screenings[0],
  };

  return (
    <>
      <div className="max-w-4xl mx-auto relative translate-x-0 p-4">
        <BookingSummary booking={booking}></BookingSummary>

        <main className="flex flex-col gap-y-4 md:w-2/3 md:pr-8">
          <TicketTypeMenu types={types}></TicketTypeMenu>
        </main>
      </div>
    </>
  );
}
