import { BookingDetails } from "@/types";
import formatDate from "@/utils/formatting";
import { FC } from "react";
import Image from "next/image";

type TicketSummaryProps = {
  bookingDetails: BookingDetails;
};

const TicketSummary: FC<TicketSummaryProps> = ({ bookingDetails }) => {
  const { screening, tickets } = bookingDetails;
  const movie = screening.attributes.movie.data;

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4">
      <Image
        className="w-24 sm:w-auto sm:h-44 rounded"
        src={movie.attributes.image.url}
        alt={movie.attributes.title + " poster"}
        width={70}
        height={70}
      />
      <div className="">
        <ul>
          <li className="font-bold text-lg mb-2">{movie.attributes.title}</li>
          <li className="text-white opacity-70">{screening.attributes.room}</li>
          <li className="text-white opacity-70">
            {formatDate(new Date(screening.attributes.start_time))}
          </li>
        </ul>
        <hr className="h-[2px] bg-slate-400 my-2 rounded"></hr>
        <ul className="mt-2">
          {tickets.map((ticket) =>
            ticket.quantity ? (
              <li key={ticket.id} className="text-white opacity-70">
                {`${ticket.quantity} st ${ticket.type}`}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TicketSummary;
