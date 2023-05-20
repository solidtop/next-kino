import { FC } from "react";
import SeatsPaymentPage from "./SeatsPaymentPage";
import formatDate from "@/utils/formatting";
import { BookingDetails } from "@/types";
import Image from "next/image";

type SummaryProps = {
  bookingDetails: BookingDetails;
  seatArray: number[];
};

const PaymentSummary: FC<SummaryProps> = ({ bookingDetails, seatArray }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4 mt-4">
      <Image
        className="sm:w-auto sm:h-60 rounded"
        src={
          bookingDetails.screening.attributes.movie.data.attributes.image.url
        }
        height={180}
        width={180}
        alt="Movie poster"
      />
      <div className="my-auto ml-2">
        <ul className="bg-container-color rounded ">
          <li className="font-bold text-lg mb-2">
            {bookingDetails.screening.attributes.movie.data.attributes.title}
          </li>
          <li className="text-white opacity-70">
            {bookingDetails.screening.attributes.room}
          </li>
          <li className="text-white opacity-70">
            {formatDate(
              new Date(bookingDetails.screening.attributes.start_time)
            )}
          </li>
          <ul className="flex flex-row flex-wrap mt-2 text-white opacity-70">
            Bokade platser:
            {seatArray.map((seat) => (
              <SeatsPaymentPage seat={seat} key={seat} />
            ))}
          </ul>

          <hr className=" mb-2 mt-10 opacity-50"></hr>
          <li className="">Totalt: {bookingDetails.pricing.amountTotal} kr</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentSummary;
