import { FC } from "react";
import SeatingGrid from "./SeatingGrid";
import initTheater from "@/utils/seatingTemplate";

const SeatingChart: FC<any> = ({ bookingDetails }) => {
  const seating = initTheater(96);
  return (
    <div className="p-4 bg-container-color rounded">
      <div className="font-semibold bg-gray-950 text-center text-3xl pt-1 h-12 w-96 ml-auto mr-auto rounded">
        BIODUK
      </div>
      <SeatingGrid seating={seating} />
    </div>
  );
};

export default SeatingChart;
