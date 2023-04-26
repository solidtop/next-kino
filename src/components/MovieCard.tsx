import { FC } from "react";
import Link from "next/link";
import { Movie } from "@/types";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <li className="bg-container-color rounded overflow-hidden shadow-xl p-3 relative transition-transform hover:scale-105">
      <Link className="absolute top-0 bottom-0 left-0 right-0" href={""}></Link>
      <img className="w-full" src="https://placekitten.com/200/300" alt="" />
      <div className="font-bold text-center text-lg">{movie.title}</div>
    </li>
  );
};

export default MovieCard;
