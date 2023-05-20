import { getMovie, getScreeningById } from "@/utils/api";
import Header from "@/components/Header";
import MovieDetails from "@/components/MovieDetails";
import Screenings from "@/components/Screenings";

export default async function DetailsPage({ params }: { params: { id: string }}) {
  const details = await getMovie(params.id);
  const screenings = await getScreeningById(params.id)
  
  
  return (
    <>
      <Header />
      <MovieDetails movieDetails={details} />
      <Screenings screenings={screenings} />
    </>
  );
}


