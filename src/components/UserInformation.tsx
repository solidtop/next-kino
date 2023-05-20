import { FC } from "react";
import { Ticket, Movie } from "@/types";
import formatDate from "@/utils/formatting";
import { getAmountTotal } from "@/utils/validation";
import Image from "next/image";
import SeatsPaymentPage from "./SeatsPaymentPage";
import BackButton from "./BackButton";

type UserObject = {
  email: string;
  id: string;
  name: string;
};

type TicketObject = {
  bookingId: string;
  email: string;
  movie: string;
  screeningId: number;
  seats: number[];
  startTime: string;
  tickets: Ticket[];
};

type UserInformationProps = {
  currentUser: UserObject;
  userTickets: Array<TicketObject>;
  movies: Array<Movie>;
};

const UserInformation: FC<UserInformationProps> = ({
  currentUser,
  userTickets,
  movies,
}) => {
  return (
    <>
      <BackButton />
      <div className="mx-auto sm:w-[600px] w-96 bg-container-color rounded p-4">
        <p className="text-3xl">Välkommen {currentUser.name}</p>
        <p>Inloggad med: {currentUser.email}</p>
      </div>

      <div className="mx-auto sm:w-[600px] w-96 my-10">
        <p className="text-3xl font-semibold">Bokade biljetter</p>
        {userTickets.map((ticket) => {
          return (
            <>
              <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4 mt-4">
                {movies.map((movie) => {
                  if (movie.attributes.title === ticket.movie) {
                    return (
                      <Image
                        key={movie.attributes.title}
                        className="sm:w-auto sm:h-60 rounded mx-auto sm:mx-0"
                        src={movie.attributes.image.url}
                        height={180}
                        width={180}
                        alt="Movie Poster"
                      />
                    );
                  }
                })}
                <div className="my-auto ml-2">
                  <ul className="bg-container-color rounded ">
                    <li className="font-bold text-lg mb-2">{ticket.movie}</li>
                    <li key={ticket.email} className="text-white opacity-70">
                      {ticket.email}
                    </li>
                    <li
                      key={formatDate(new Date(ticket.startTime))}
                      className="text-white opacity-70">
                      {formatDate(new Date(ticket.startTime))}
                    </li>
                    <ul className="flex flex-row flex-wrap mt-2 text-white opacity-70">
                      Bokade platser:
                      {ticket.seats.map((seat) => (
                        <SeatsPaymentPage seat={seat} key={seat} />
                      ))}
                    </ul>

                    <hr className=" mb-2 mt-10 opacity-50"></hr>
                    <li key={getAmountTotal(ticket.tickets)} className="">
                      Totalt: {getAmountTotal(ticket.tickets)} kr
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserInformation;
