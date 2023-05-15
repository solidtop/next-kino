import { FC } from "react";
import { SeatObject } from "@/types";

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
      className={`bg-${seatState} h-8 w-8 rounded hover:bg-gray-400 hover:cursor-pointer text-center font-semibold pt-1 text-black text-opacity-80 state-${seatState}`}>
      {seatIndex}
    </li>
  );
};

export default Seats;
