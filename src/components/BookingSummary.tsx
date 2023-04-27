"use client";

import { Movie } from "@/types";
import { FC } from "react";

type Booking = {
  bookingId: number;
  pricing: {
    amountTotal: number;
  };
  movie: Movie;
};

type BookingSummaryProps = {
  booking: {};
  movie: Movie;
};

const BookingSummary: FC<BookingSummaryProps> = ({ booking, movie }) => {
  return (
    <aside className="bg-container-color rounded max-w-xs p-4 m-4 md:ml-auto">
      <div className="flex justify-start items-center gap-x-4">
        <img
          className="w-24 rounded"
          src={movie.attributes.image.url}
          alt={movie.attributes.title + " poster"}
        />
        <ul>
          <li className="font-bold text-lg mb-2">{movie.attributes.title}</li>
          <li>Stora salongen</li>
          <li>Idag, Måndag 26 februari 13:00</li>
        </ul>
      </div>

      <div className="flex flex-col gap-20 justify-between mt-2">
        <ul>
          <li>
            <p>2 st Ordinarie</p>
            <p>270.00 kr</p>
          </li>
        </ul>

        <ul>
          <li className="flex justify-between">
            <div>Totalt att betala</div>
            <div>270.00 kr</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BookingSummary;
