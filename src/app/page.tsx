import MovieList from "@/components/MovieList";
import { Movie } from "@/types";

const movies: Movie[] = [
  {
    title: "Avatar",
    imgUrl: "",
  },
  {
    title: "Shawshank",
    imgUrl: "",
  },
  {
    title: "Toy Story",
    imgUrl: "",
  },
  {
    title: "Up",
    imgUrl: "",
  },
];

export default function Home() {
  return (
    <main>
      <MovieList movies={movies}></MovieList>
    </main>
  );
}
