import { FC } from "react";
import Link from "next/link";
import { Movie } from "@/types";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <li className="bg-container-color rounded overflow-hidden shadow-xl p-3 relative transition-transform hover:-translate-y-1">
      <Link
        className="absolute top-0 bottom-0 left-0 right-0"
        href={"/movies/" + movie.id}
      ></Link>
      <img
        className="object-cover w-full h-72"
        src={movie.attributes.image.url}
        alt={movie.attributes.title + " poster"}
      />
      <div className="text-white text-center text-lg">
        {movie.attributes.title}
      </div>
    </li>
  );
};

export default MovieCard;
