import { FC } from "react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <section className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-xl text-center my-6">Hela Bioprogrammet</h1>
      <ul className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie}></MovieCard>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
