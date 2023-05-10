import { FC } from "react";

const SeatingLegend: FC<any> = () => {
  return (
    <div className="p-4 mt-1 bg-container-color rounded font-semibold ">
      Om färgerna i stolplanen:
      <div className="flex justify-center gap-1 mt-4">
        <div className="h-6 w-6 bg-bg-color rounded" id="available"></div>
        <label htmlFor="available" className="mr-10">
          Tillgänglig
        </label>

        <div id="selected" className="h-6 w-6 bg-gray-400 rounded"></div>
        <label htmlFor="selected">Vald plats</label>

        <div
          id="occupied"
          className="h-6 w-6 bg-btn-primary-color rounded ml-10"></div>
        <label htmlFor="occupied">Upptagen</label>
      </div>
    </div>
  );
};

export default SeatingLegend;
