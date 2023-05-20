import { FC } from "react";
import Link from "next/link";
import formatDate from "@/utils/formatting";
import { Screening } from "@/types";

type MovieDetailsProp = {
  screenings: Array<Screening>;
};

const Screenings: FC<MovieDetailsProp> = ({ screenings }) => {
  return (
    <div className="relative mx-auto w-full px-4 mt-10">
      <p className="text-2xl text-center font-semibold mb-4">Visningstider</p>
      <div>
        {screenings.map((screening) => {
          return (
            <ul
              key={screening.id}
              className="bg-container-color rounded mb-4 p-4 flex flex-row w-full">
              <li className="my-auto w-fit lg:w-fit" key={screening.id}>
                {formatDate(new Date(screening.attributes.start_time))}
              </li>
              <li
                className="my-auto mx-auto  text-center"
                key={screening.attributes.room}>
                {screening.attributes.room}
              </li>
              <Link
                href={`/booking/${screening.id}`}
                className="block w-32 py-3 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
                Biljetter
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Screenings;
