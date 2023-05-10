import { FC } from "react";
import Seats from "./Seat";

const SeatingGrid: FC<any> = ({ seating, tickets }) => {
  const ticketsArray = tickets;
  const selectedSeats: Array<number> = [];

  return (
    <div className="flex flex-wrap gap-2 pt-16 mb-4 justify-center mr-10 ml-10 w-[480px] ">
      {seating.map((seat: number) => {
        const seatIndex: number = seat;
        return (
          <Seats
            seatIndex={seatIndex}
            tickets={ticketsArray}
            selectedSeats={selectedSeats}
          />
        );
      })}
    </div>
  );
};

export default SeatingGrid;
