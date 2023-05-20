import { FC } from "react";
import { ScreeningProps } from "@/types";
import Link from "next/link";
import formatDate from "@/utils/formatting";

const Screenings: FC<ScreeningProps> = ({ screenings }) => {
  return (
    <div className="relative mx-auto w-full px-4 mt-10">
      <p className="text-2xl text-center font-semibold mb-4">Visningstider</p>
      {screenings.map((item, index) => {
        return (
          <li
            className="bg-container-color rounded mb-4 p-4 flex flex-row w-full"
            key={index}>
            <span className="my-auto w-fit lg:w-fit">
              {formatDate(new Date(item.attributes.start_time))}
            </span>
            <span className="my-auto mx-auto  text-center">
              {"Salong: " + item.attributes.room}
            </span>
            <Link
              className="block w-32 py-3 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold"
              href={"/booking/" + item.id}>
              Boka
            </Link>
          </li>
        );
      })}
    </div>
  );
};
export default Screenings;
