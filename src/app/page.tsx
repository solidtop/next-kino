import MovieList from "@/components/MovieList";
import * as api from "@/utils/api";

export default async function Home() {
  const movies = await api.getMovies();

  return <main>{movies && <MovieList movies={movies}></MovieList>}</main>;
}
