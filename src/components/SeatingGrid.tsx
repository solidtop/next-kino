import { FC } from "react";

const SeatingGrid: FC<any> = ({ seating }) => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-16 mb-4 ml-16 mr-16 ">
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
