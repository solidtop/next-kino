import { FC } from "react";

const SeatingGrid: FC<any> = ({ seating }) => {
  return (
    <div className="min-w-40">
      {seating.map((seat: number) => {
        const seatIndex: number = seat;
        return <div className="bg-bg-color h-6 w-6 rounded"></div>;
      })}
    </div>
  );
};

export default SeatingGrid;
