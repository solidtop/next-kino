import { FC } from "react";
import { Movie } from "@/types";
import MovieCard from "@/components/movies/MovieCard";

type MovieListProps = {
  movies: Movie[];
};

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <section className="container mx-auto p-6 max-w-4xl">
      <h1 className="font-semibold text-2xl text-center my-6">
        Hela Bioprogrammet
      </h1>
      <ul className="grid grid-cols-fluid gap-4 justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
