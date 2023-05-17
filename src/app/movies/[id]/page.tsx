import { getMovie, getScreeningById } from "@/utils/api";
import Header from "@/components/Header";
import MovieDetails from "@/components/MovieDetails";
import Screenings from "@/components/Screenings";
import { useSearchParams } from "next/navigation";

export default async function DetailsPage({ params }: { params: { id: string }}) {
  const details = await getMovie(params.id);
  const screening = await getScreeningById(params.id)
  //console.log('screenings', screening)
  
  return (
    <>
      <Header />
      <MovieDetails movieDetails={details} />
      <Screenings Screening={screening} />
    </>
  );
}


