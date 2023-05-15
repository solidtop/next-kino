"use client";
import Header from "@/components/Header";
import { getScreeningsById, getMovie } from "@/utils/api";
import { useParams } from "next/navigation";
import MovieDetails from "@/components/MovieDetails";
import Screenings from "@/components/Screenings";
import BackButtonMoviePage from "@/components/BackButtonMoviePage";
import { useState, useEffect } from "react";
import { Movie, Screening } from "@/types";

export default function MoviePage() {
  const [movie, setMovie] = useState<Movie>();
  const [screenings, setScreenings] = useState<Screening[]>();
  const params = useParams();

  useEffect(() => {
    const loadData = async () => {
      const movie = await getMovie(params.id);
      const screenings = await getScreeningsById(params.id);
      setMovie(movie);
      setScreenings(screenings);
    };
    loadData();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <BackButtonMoviePage />
        {movie && <MovieDetails movie={movie} />}
        {screenings && <Screenings screenings={screenings} />}
      </div>
    </>
  );
}
