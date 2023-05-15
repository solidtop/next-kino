import { getMovieById } from "@/utils/api";
import Header from "@/components/Header";
import MovieDetails from '@/components/MovieDetails'
import { useSearchParams } from "next/navigation";



export default async function DetailsPage() {
    const res = await getMovieById()
   
return (
    <>
    <Header />
    <MovieDetails movieDetails= {res}/>
    </>
    
    )
}