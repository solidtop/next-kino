import { FC } from "react";
import { BookingDetails } from "@/types";
import formatDate from "@/utils/formatting";

type SummaryProps = {
  bookingDetails: BookingDetails;
};

const BookingSummary: FC<SummaryProps> = ({ bookingDetails }) => {
  const { screening, tickets, pricing } = bookingDetails;
  const movie = screening.attributes.movie.data;

  return (
    <div className="w-full px-4 pt-4 relative md:fixed md:max-w-screen-xl md:top-0 md:left-1/2 md:-translate-x-1/2">
      <aside className="bg-container-color rounded md:absolute m-0 left-2/3 top-4 right-4 lg:left-3/4 p-4">
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
