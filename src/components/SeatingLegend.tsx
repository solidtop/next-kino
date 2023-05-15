import { FC } from "react";

const SeatingLegend: FC<any> = () => {
  return (
    <legend className="p-4 mt-1 bg-container-color rounded font-semibold ">
      Om färgerna i stolplanen:
      <ul className="flex flex-wrap justify-start gap-4 mt-4">
        <li className="flex gap-2">
          <div className="h-6 w-6 bg-available rounded" id="available"></div>
          <label htmlFor="available" className="">
            Tillgänglig
          </label>
        </li>
        <li className="flex gap-2">
          <div id="selected" className="h-6 w-6 bg-selected rounded"></div>
          <label htmlFor="selected">Vald plats</label>
        </li>
        <li className="flex gap-2">
          <div id="occupied" className="h-6 w-6 bg-occupied rounded"></div>
          <label htmlFor="occupied">Upptagen</label>
        </li>
      </ul>
    </legend>
  );
};

export default SeatingLegend;
