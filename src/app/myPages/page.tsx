import Header from "@/components/Header";
import UserInformation from "@/components/UserInformation";

// import { useState, useEffect } from "react";
import { Ticket } from "@/types";
import { getMovies } from "@/utils/api";

import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import connectDb from "@/utils/connectDb";
import TicketsModel from "@/models/tickets";

type TicketObject = {
  bookingId: string;
  email: string;
  movie: string;
  screeningId: number;
  seats: number[];
  startTime: string;
  tickets: Ticket[];
};

const getMovieList = async () => {
  try {
    const res = await getMovies();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default async function MyPages() {
  const allCookies = cookies();
  const jwt = allCookies.get("u-session")?.value;

  if (!jwt) {
    return null;
  }

  try {
    const payload = JWT.verify(jwt, process.env.JWT_SECRET as string);
    const userInfo = typeof payload == "object" ? payload.sessionObject : null;
    const userEmail = userInfo.email;

    connectDb();
    const tickets: Array<TicketObject> = await TicketsModel.find({
      email: userEmail,
    });

    const movies = await getMovieList();

    return (
      movies && (
        <>
          <Header />
          <div className="max-w-screen-xl mx-auto">
            <UserInformation
              currentUser={userInfo}
              userTickets={tickets}
              movies={movies}
            />
          </div>
        </>
      )
    );
  } catch (err) {
    return (
      <div>
        <h1>Invalid session!</h1>
        <p>Did you tamper with your cookie?</p>
      </div>
    );
  }
}
