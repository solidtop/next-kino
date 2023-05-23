import MovieList from "@/components/movies/MovieList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMovies } from "@/utils/api";

export default async function Home() {
  const movies = await getMovies();

  return (
    <main>
      <Header />
      {movies && <MovieList movies={movies}></MovieList>}
      <Footer />
    </main>
  );
}
