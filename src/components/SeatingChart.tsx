import { FC } from "react";
import SeatingGrid from "./SeatingGrid";
import FilmScreen from "./FilmScreen";
import initTheater from "@/utils/seatingTemplate";

const SeatingChart: FC<any> = ({ bookingDetails }) => {
  const seating = initTheater(96);
  return (
    <div className="p-4 bg-container-color rounded">
      <FilmScreen />
      <SeatingGrid seating={seating} />
    </div>
  );
};

export default SeatingChart;
