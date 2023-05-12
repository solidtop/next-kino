import { FC, useState, useEffect } from "react";
import SelectedSeats from "./SelectedSeats";
import Seats from "./Seat";
import FilmScreen from "./FilmScreen";
import { populateTheater } from "@/utils/seatingTemplate";
import { BookingDetails } from "@/types";
import { getTicketsQuantity } from "@/utils/validation";

type SeatingChartProps = {
  bookingDetails: BookingDetails;
  seatingDetails: Array<number>;
  onUpdate: (bookingDetails: BookingDetails) => void;
};

export type SeatObject = {
  seat: number;
  state: string;
};

const SeatingChart: FC<SeatingChartProps> = ({
  bookingDetails,
  seatingDetails,
  onUpdate,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<number>(0);
  const [currSeats, setCurrSeats] = useState<Array<SeatObject>>(
    populateTheater(seatingDetails)
  );

  const bookingSeats: Array<number> = [];

  let ticketQuantity = getTicketsQuantity(bookingDetails.tickets);

  console.log(ticketQuantity);

  useEffect(() => {
    setCurrSeats(populateTheater(seatingDetails));
    setSelectedSeats(0);
  }, [seatingDetails]);

  const handleUpdateSeats = (
    currSeats: Array<SeatObject>,
    newSeat: string
  ): void => {
    const newSeatNum = parseInt(newSeat);

    const updatedSeats = currSeats.map((seat) => {
      if (selectedSeats >= ticketQuantity && seat.state !== "selected") {
        console.log("NO MORE TICKETS");
        return seat;
      } else {
        if (seat.state === "occupied") {
          return seat;
        } else if (seat.seat === newSeatNum && seat.state === "selected") {
          setSelectedSeats(selectedSeats - 1);
          return { ...seat, state: "available" };
        } else if (seat.seat === newSeatNum) {
          setSelectedSeats(selectedSeats + 1);
          return { ...seat, state: "selected" };
        } else {
          return seat;
        }
      }
    });

    setCurrSeats(updatedSeats);

    updatedSeats.forEach((seat) => {
      if (seat.state === "selected") {
        bookingSeats.push(seat.seat);
      }
    });
    onUpdate({ ...bookingDetails, seats: bookingSeats });
  };
  return (
    <div className="p-4 bg-container-color rounded">
      <FilmScreen />
      <SelectedSeats
        bookingDetails={bookingDetails}
        selectedSeats={selectedSeats}
      />
      <ul className="flex flex-wrap gap-2 pt-2 mb-4 justify-center mr-10 ml-10 w-[480px]">
        {currSeats.map((seat: SeatObject) => {
          return (
            <Seats
              key={seat.seat}
              seatIndex={seat.seat}
              seatState={seat.state}
              currSeats={currSeats}
              onSeatChange={handleUpdateSeats}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SeatingChart;
