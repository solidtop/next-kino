import TicketSummary from "@/components/TicketSummary";
import { BookingDetails } from "@/types";
import Link from "next/link";

const booking: BookingDetails = {
  id: "TESTTEST",
  email: null,
  pricing: {
    amountTotal: 0,
  },
  tickets: [
    {
      id: 0,
      type: "Ordinarie",
      price: 135,
      quantity: 2,
      maxQuantity: 5,
    },
    {
      id: 1,
      type: "Pensionär",
      price: 100,
      quantity: 1,
      maxQuantity: 5,
    },
    {
      id: 2,
      type: "Student",
      price: 100,
      quantity: 1,
      maxQuantity: 5,
    },
  ],
  screening: {
    id: 101,
    attributes: {
      start_time: new Date("2023-03-24T21:00:00.000Z"),
      room: "Stora salongen",
      createdAt: new Date("2023-03-12T15:56:09.684Z"),
      updatedAt: new Date("2023-03-12T15:56:09.684Z"),
      movie: {
        data: {
          id: 1,
          attributes: {
            title: "Isle of dogs",
            imdbId: "tt5104604",
            intro:
              "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
            image: {
              url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            },
            createdAt: new Date("2023-01-23T05:58:58.110Z"),
            updatedAt: new Date("2023-01-27T07:11:53.523Z"),
            publishedAt: new Date("2023-01-23T06:01:31.679Z"),
          },
        },
      },
    },
  },
  seats: [],
};

export default function ConfirmationPage() {
  return (
    <main className="flex flex-col gap-4 items-center my-8 p-4">
      <h1 className="text-3xl semi-bold mx-4">Bokningsbekräftelse</h1>
      <p>Tack för din bokning!</p>
      <TicketSummary bookingDetails={booking} />
      <p>Kvitto och biljetter har skickats till din mail</p>
      <Link
        href="/"
        className="inline-flex items-center h-10 px-4 rounded-full lg:mx-10 bg-btn-primary-color hover:brightness-110"
      >
        <img
          src="/icons/chevron-left-solid.svg"
          alt="chevron left"
          className="w-2 mr-2"
        />
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
