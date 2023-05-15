import MovieList from "@/components/MovieList";
import Header from "@/components/Header";
import * as api from "@/utils/api";

//temp
import MovieDetails from '@/components/MovieDetails'

export default async function Home() {
  const movies = await api.getMovies();
  
  const loggedIn: boolean = false;
  return (
    <main>
      <Header loggedIn={loggedIn} />
      {movies && <MovieList movies={movies}></MovieList>}
      
    </main>
  );
}
