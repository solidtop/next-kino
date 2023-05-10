export default function initTheater(seats: number) {
  const seatingArray: Array<number> = [];

  for (let i = 0; i < seats; i++) {
    seatingArray.push(i + 1);
  }

  return seatingArray;
}
