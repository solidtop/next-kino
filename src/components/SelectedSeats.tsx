import { FC } from "react";
import SeatIndication from "./SeatIndication";

const SelectedSeats: FC<any> = ({ bookingDetails, selectedSeats }) => {
  const seatArray: Array<number> = bookingDetails.seats;

  if (selectedSeats < seatArray.length) {
    return (
      <div className="flex flex-row ml-11 mt-12 text-xl">Valda platser:</div>
    );
  } else {
    return (
      <div className="flex flex-row ml-11 mt-12 text-xl">
        Valda platser:
        {seatArray.map((seat) => (
          <SeatIndication seat={seat} />
        ))}
      </div>
    );
  }
};

export default SelectedSeats;
