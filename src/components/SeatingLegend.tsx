import { FC } from "react";

const SeatingLegend: FC<any> = () => {
  return (
    <legend className="p-4 mt-1 bg-container-color rounded font-semibold ">
      Om färgerna i stolplanen:
      <div className="flex justify-center gap-1 mt-4">
        <div className="h-6 w-6 bg-available rounded" id="available"></div>
        <label htmlFor="available" className="mr-10">
          Tillgänglig
        </label>

        <div id="selected" className="h-6 w-6 bg-selected rounded"></div>
        <label htmlFor="selected">Vald plats</label>

        <div id="occupied" className="h-6 w-6 bg-occupied rounded ml-10"></div>
        <label htmlFor="occupied">Upptagen</label>
      </div>
    </legend>
  );
};

export default SeatingLegend;
