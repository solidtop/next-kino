import { FC } from "react";
import SeatIndication from "@/components/booking/SeatIndication";

const SelectedSeats: FC<any> = ({ bookingDetails }) => {
  const seatArray: Array<number> = bookingDetails.seats;

  return (
    <div className="flex flex-wrap items-center max-w-[480px] mx-auto mt-12 mb-2">
      <p className="whitespace-nowrap h-fit text-left text-lg">
        Valda platser:
      </p>
      <ul className="flex flex-wrap gap-2 ml-4">
        {seatArray.map((seat) => (
          <SeatIndication seat={seat} key={seat} />
        ))}
      </ul>
    </div>
  );
};

export default SelectedSeats;
