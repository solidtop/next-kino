import { FC, useState } from "react";

const Seats: FC<any> = ({ seatIndex, seatState, onSeatChange, currSeats }) => {
  return (
    <div
      key={seatIndex}
      id={seatIndex}
      onClick={(e) => {
        onSeatChange(currSeats, e.target.id);
      }}
      className={`bg-${seatState} h-8 w-8 rounded hover:bg-gray-400 hover:cursor-pointer state-${seatState}`}></div>
  );
};

export default Seats;
