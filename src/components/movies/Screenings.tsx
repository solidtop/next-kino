import { FC } from "react";
import { ScreeningProps } from "@/types";
import Link from "next/link";
import formatDate from "@/utils/formatting";

const Screenings: FC<ScreeningProps> = ({ screenings }) => {
  return (
    <ul className="relative mx-auto px-4 mt-10">
      <p className="text-2xl text-center font-semibold mb-4">Visningstider</p>
      {screenings.map((item, index) => {
        return (
          <li
            className="bg-container-color rounded my-4 p-4 grid grid-cols-3 items-center"
            key={index}
          >
            <span>{formatDate(new Date(item.attributes.start_time))}</span>
            <span className="text-center justify-self-center">
              {"Salong: " + item.attributes.room}
            </span>
            <Link
              className="justify-self-end block w-20 py-2 md:w-32 md:py-3 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold"
              href={"/booking/" + item.id}
            >
              Boka
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Screenings;
