"use client";

import { Booking } from "@/types";
import { FC } from "react";
import formatDate from "@/utils/formatting";

type BookingSummaryProps = {
  booking: Booking;
};

const BookingSummary: FC<BookingSummaryProps> = ({ booking }) => {
  const screening = booking.screening;
  const movie = screening.attributes.movie.data;

  return (
    <aside className="bg-container-color rounded md:w-1/3 mb-4 p-4 md:fixed md:top-4 md:right-4">
      <div className="flex justify-start items-center gap-x-4">
        <img
          className="w-24 rounded"
          src={movie.attributes.image.url}
          alt={movie.attributes.title + " poster"}
        />
        <ul>
          <li className="font-bold text-lg mb-2">{movie.attributes.title}</li>
          <li className="text-white opacity-70">Stora salongen</li>
          <li className="text-white opacity-70">
            {formatDate(new Date(screening.attributes.start_time))}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-20 justify-between mt-2">
        <ul>
          <li>
            <p className="text-white opacity-70">2 st Ordinarie</p>
            <p>{booking.pricing.amountTotal} kr</p>
          </li>
        </ul>

        <ul>
          <hr className="h-[2px] bg-slate-400 mb-2 rounded"></hr>
          <li className="flex justify-between">
            <div>Totalt att betala</div>
            <div>{booking.pricing.amountTotal} kr</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BookingSummary;
