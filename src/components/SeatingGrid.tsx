import { FC } from "react";

const SeatingGrid: FC<any> = ({ seating }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-1.5 pt-16 mb-2">
      {seating.map((seat: number) => {
        const seatIndex: number = seat;
        return (
          <div
            key={seatIndex}
            id={seatIndex.toString()}
            className="bg-gray-700 h-8 w-8 rounded hover:bg-gray-400 hover:cursor-pointer"></div>
        );
      })}
    </div>
  );
};

export default SeatingGrid;
