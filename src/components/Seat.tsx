import { FC, useState } from "react";

const Seats: FC<any> = ({ seatIndex, tickets, selectedSeats }) => {
  const [seatState, setSeatState] = useState("available");

  const selectSeat = (e) => {
    if (seatState === "occupied" || selectedSeats.length >= tickets.length) {
      console.log("OCCUPIED");
      return;
    } else {
      if (selectedSeats.includes(e.target.id)) {
        selectedSeats.splice(e.target.id);
      } else {
        selectedSeats.push(e.target.id);
      }

      if (seatState === "selected") {
        setSeatState("available");
      } else if (seatState !== "occupied") {
        setSeatState("selected");
      }
    }
  };

  return (
    <div
      key={seatIndex}
      id={seatIndex.toString()}
      onClick={selectSeat}
      className={`bg-${seatState} h-8 w-8 rounded hover:bg-gray-400 hover:cursor-pointer state-${seatState}`}></div>
  );
};

export default Seats;
