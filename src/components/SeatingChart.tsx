import { FC } from "react";

const SeatingChart: FC<any> = ({ bookingDetails }) => {
  return (
    <div className="p-4 bg-container-color rounded">
      <div className="font-semibold bg-gray-950 text-center text-3xl pt-1 h-12 w-96 ml-auto mr-auto rounded">
        BIODUK
      </div>
      <div>Seats Here</div>
    </div>
  );
};

export default SeatingChart;
