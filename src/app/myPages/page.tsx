"use client";
import Header from "@/components/Header";
import UserInformation from "@/components/UserInformation";
import { useState, useEffect } from "react";
import { Ticket, Movie } from "@/types";
import { getMovies } from "@/utils/api";

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

export default function MyPages() {
  const [currentUser, setCurrentUser] = useState<UserObject>();
  const [userTickets, setUserTickets] = useState<Array<TicketObject>>();
  const [movies, setMovies] = useState<Array<Movie>>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setCurrentUser(user);
    getMovieList();
  }, []);

  useEffect(() => {
    if (currentUser !== undefined) {
      getTickets(currentUser.email);
    }
  }, [currentUser]);

  const getTickets = async (email: string) => {
    try {
      const res = await fetch("/api/auth/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = await res.json();
      setUserTickets(payload);
      return payload;
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieList = async () => {
    try {
      const res = await getMovies();
      setMovies(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  if (currentUser && userTickets) {
    return (
      currentUser &&
      userTickets &&
      movies && (
        <>
          <Header />
          <div className="max-w-screen-xl mx-auto">
            <UserInformation
              currentUser={currentUser}
              userTickets={userTickets}
              movies={movies}
            />
          </div>
        </>
      )
    );
  } else {
    return (
      <>
        <Header />
        <div className="max-w-screen-xl mx-auto"></div>
      </>
    );
  }
}
