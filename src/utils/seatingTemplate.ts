export function initTheater(seats: number) {
  const seatingArray: Array<number> = [];

  for (let i = 0; i < seats; i++) {
    seatingArray.push(i + 1);
  }

  return seatingArray;
}

export function populateTheater(seatingDetails: Array<number>) {
  const seating = initTheater(96);
  const availableSeats = seating.map((seat) => {
    if (seatingDetails.includes(seat)) {
      return {
        seat: seat,
        state: "occupied",
      };
    } else {
      return {
        seat: seat,
        state: "available",
      };
    }
  });

  return availableSeats;
}
