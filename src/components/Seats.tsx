import { FC } from "react";
import { SeatObject } from "@/types";
import { getTicketsQuantity, getSelectedSeats } from "@/utils/validation";

type SeatProps = {
  seatIndex: number;
  seatState: string;
  onSeatChange: (currSeats: Array<SeatObject>, newSeat: string) => void;
  currSeats: Array<SeatObject>;
};

const Seats: FC<SeatProps> = ({
  seatIndex,
  seatState,
  onSeatChange,
  currSeats,
}) => {
  return (
    <li
      key={seatIndex}
      id={seatIndex.toString()}
      onClick={(e) => {
        onSeatChange(currSeats, (e.target as HTMLInputElement).id);
      }}
      className={`bg-${seatState} seat flex justify-center items-center w-full min-h-max aspect-square rounded text-center text-xs sm:text-base font-semibold text-bg-color state-${seatState} ${
        seatState !== "occupied"
          ? "group hover:brightness-125 hover:cursor-pointer"
          : ""
      }`}
    >
      {seatIndex}
    </li>
  );
};

export default Seats;
