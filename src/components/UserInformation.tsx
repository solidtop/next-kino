import { FC } from "react";
import { Ticket } from "@/types";
import formatDate from "@/utils/formatting";
import { getAmountTotal } from "@/utils/validation";
import Image from "next/image";
import SeatsPaymentPage from "./SeatsPaymentPage";

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
};

const UserInformation: FC<UserInformationProps> = ({
  currentUser,
  userTickets,
}) => {
  return (
    <>
      <div className="w-96 mx-auto my-20">
        <p>Välkommen {currentUser.name}</p>
        <p>Inloggad med: {currentUser.email}</p>
      </div>

      <div className="mx-auto w-96">
        Bokade biljetter
        {userTickets.map((ticket) => {
          return (
            <>
              <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4 mt-4">
                <div className="my-auto ml-2">
                  <ul className="bg-container-color rounded ">
                    <li className="font-bold text-lg mb-2">{ticket.movie}</li>
                    <li className="text-white opacity-70">{ticket.email}</li>
                    <li className="text-white opacity-70">
                      {formatDate(new Date(ticket.startTime))}
                    </li>
                    <ul className="flex flex-row flex-wrap mt-2 text-white opacity-70">
                      Bokade platser:
                      {ticket.seats.map((seat) => (
                        <SeatsPaymentPage seat={seat} key={seat} />
                      ))}
                    </ul>

                    <hr className=" mb-2 mt-10 opacity-50"></hr>
                    <li className="">
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
