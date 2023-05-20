import MovieList from "@/components/MovieList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as api from "@/utils/api";

export default async function Home() {
  const movies = await api.getMovies();
  return (
    <main>
      <Header />
      {movies && <MovieList movies={movies}></MovieList>}
      <Footer />
    </main>
  );
}
