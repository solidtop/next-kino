import { getMovie, getScreeningById } from "@/utils/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieDetails from "@/components/movies/MovieDetails";
import Screenings from "@/components/movies/Screenings";

type metadataProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: metadataProps) {
  const movie = await getMovie(params.id);
  const movieTitle = movie.attributes.title;

  return {
    title: `Se ${movieTitle} på bio`,
  };
}

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const details = await getMovie(params.id);
  const screenings = await getScreeningById(params.id);

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <MovieDetails movieDetails={details} />
        <Screenings screenings={screenings} />
      </div>
      <Footer />
    </>
  );
}
