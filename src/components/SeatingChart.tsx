import { FC, useState, useEffect } from "react";
import SelectedSeats from "./SelectedSeats";
import Seats from "./Seats";
import FilmScreen from "./FilmScreen";
import { populateTheater } from "@/utils/seatingTemplate";
import { BookingDetails, SeatObject } from "@/types";
import { getTicketsQuantity, getSelectedSeats } from "@/utils/validation";

type SeatingChartProps = {
  bookingDetails: BookingDetails;
  seatingDetails: Array<number>;
  onUpdate: (bookingDetails: BookingDetails) => void;
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

  let bookingSeats: Array<number> = [];

  const ticketQuantity = getTicketsQuantity(bookingDetails.tickets);

  useEffect(() => {
    setCurrSeats(populateTheater(seatingDetails));

    bookingDetails.seats.forEach((seat) => {
      bookingSeats.push(seat);
      setCurrSeats((prevSeats) => {
        return prevSeats.map((prevSeat) => {
          if (prevSeat.seat === seat) {
            return { state: "selected", seat };
          } else {
            return prevSeat;
          }
        });
      });
    });
    setSelectedSeats(bookingDetails.seats.length);
  }, [seatingDetails]);

  const handleUpdateSeats = (
    currSeats: Array<SeatObject>,
    newSeat: string
  ): void => {
    const newSeatNum = parseInt(newSeat);

    const updatedSeats = currSeats.map((seat) => {
      if (selectedSeats >= ticketQuantity && seat.state !== "selected") {
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
    const occupiedSeats = updatedSeats.map((seat) => {
      if (seat.state === "occupied") {
        return seat.seat;
      }
    });
    if (
      getSelectedSeats(updatedSeats).length === ticketQuantity &&
      !bookingSeats.includes(newSeatNum) &&
      !occupiedSeats.includes(newSeatNum)
    ) {
      alert("Du kan inte välja fler platser");
      return;
    }
    if (!occupiedSeats.includes(newSeatNum)) {
      onUpdate({ ...bookingDetails, seats: bookingSeats });
    }
  };
  return (
    <div className="p-4 bg-container-color rounded relative">
      <FilmScreen />
      <SelectedSeats
        bookingDetails={bookingDetails}
        selectedSeats={selectedSeats}
      />
      <ul
        className={`grid grid-cols-12 gap-2 mb-4 justify-center mx-auto max-w-[480px]`}
      >
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
