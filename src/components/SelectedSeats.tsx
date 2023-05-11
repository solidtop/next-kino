import { FC } from "react";
import SeatIndication from "./SeatIndication";

const SelectedSeats: FC<any> = ({ bookingDetails }) => {
  const seatArray: Array<number> = bookingDetails.seats;
  return (
    <div className="flex flex-row ml-11 mt-12 text-xl">
      Valda platser:
      {seatArray.map((seat) => (
        <SeatIndication seat={seat} />
      ))}
    </div>
  );
};

export default SelectedSeats;
