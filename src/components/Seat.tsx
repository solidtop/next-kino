import { FC } from "react";

const Seats: FC<any> = ({ seatIndex, seatState, onSeatChange, currSeats }) => {
  return (
    <li
      key={seatIndex.toString}
      id={seatIndex}
      onClick={(e) => {
        onSeatChange(currSeats, e.target.id);
      }}
      className={`bg-${seatState} h-8 w-8 rounded hover:bg-gray-400 hover:cursor-pointer state-${seatState}`}></li>
  );
};

export default Seats;
