import { FC, useState, useEffect } from "react";
import SelectedSeats from "./SelectedSeats";
import Seats from "./Seat";
import FilmScreen from "./FilmScreen";
import { populateTheater } from "@/utils/seatingTemplate";
import { BookingDetails } from "@/types";

type SeatingChartProps = {
  bookingDetails: BookingDetails;
  seatingDetails: Array<number>;
  onUpdate: (bookingDetails: BookingDetails) => void;
};

type SeatProps = {
  seat: Number;
  state: String;
};

type SeatObject = {
  seat: Number;
  state: String;
};

const SeatingChart: FC<SeatingChartProps> = ({
  bookingDetails,
  seatingDetails,
  onUpdate,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<number>(0);
  const [seats, setSeats] = useState<Array<Number>>(bookingDetails.seats);
  const [currSeats, setCurrSeats] = useState<Array<SeatObject>>(
    populateTheater(seatingDetails)
  );

  const bookingSeats: Array<Number> = [];

  //Maybe put this in Ticket Types
  let ticketQuantity: number = 0;
  ticketQuantity =
    ticketQuantity +
    bookingDetails.tickets[0].quantity +
    bookingDetails.tickets[1].quantity +
    bookingDetails.tickets[2].quantity;

  useEffect(() => {
    console.log(currSeats);
    console.log(bookingDetails);
    setSeats(bookingDetails.seats);
    setCurrSeats(populateTheater(seatingDetails));

    setSelectedSeats(0);
  }, [bookingDetails.seats]);

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
      <SelectedSeats bookingDetails={bookingDetails} />
      <div className="flex flex-wrap gap-2 pt-16 mb-4 justify-center mr-10 ml-10 w-[480px] ">
        {currSeats.map((seat: SeatObject) => {
          return (
            <Seats
              seatIndex={seat.seat}
              seatState={seat.state}
              currSeats={currSeats}
              onSeatChange={handleUpdateSeats}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatingChart;
