import { FC } from "react";
import { BookingDetails } from "@/types";
import formatDate from "@/utils/formatting";
import Image from "next/image";

type BookingSummaryProps = {
  bookingDetails: BookingDetails;
};

const BookingSummary: FC<BookingSummaryProps> = ({ bookingDetails }) => {
  const { screening, tickets, pricing } = bookingDetails;
  const movie = screening.attributes.movie.data;

  return (
    <div className="px-4 py-4 relative md:p-0 md:sticky top-0">
      <aside className="bg-container-color rounded p-4 md:absolute top-4 left-2/3 lg:left-3/4">
        <div className="flex justify-start items-center gap-x-4">
          <Image
            className="w-24 rounded"
            src={movie.attributes.image.url}
            alt={movie.attributes.title + " poster"}
            width={70}
            height={70}
            priority
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
            {tickets.map((ticket) =>
              ticket.quantity ? (
                <li key={ticket.id}>
                  <p className="text-white opacity-70">{`${ticket.quantity} st ${ticket.type}`}</p>
                  <p>{ticket.price * ticket.quantity} kr</p>
                </li>
              ) : (
                ""
              )
            )}
          </ul>

          <ul>
            <hr className="h-[2px] bg-slate-400 mb-2 rounded"></hr>
            <li className="flex justify-between">
              <div>Totalt att betala</div>
              <div>{pricing.amountTotal} kr</div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BookingSummary;
