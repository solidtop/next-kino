import { FC } from "react";
import { Movie, Screening } from "@/types";
import Link from "next/link";

const MovieDetails: FC<Movie> = ({ movieDetails }) => {
  return (
   <>
    <div className="w-full h-10">
      <Link href="/" className="block p-1 mx-5 h-7 w-10 bg-btn-primary-color rounded-lg text-sm text-center">Back</Link>
    </div>
    <div>
      <li className="flex">
        <img
          className="w-80  mx-5"
          src={movieDetails.attributes.image.url}
          
        />
        <div className="flex flex-col">
          <h3 className="text-xl ">{movieDetails.attributes.title}</h3>
          <p className="mt-5 w-2/4">{movieDetails.attributes.intro}</p>
        </div>
      </li>
    </div>
   </>
   
  );
};
export default MovieDetails;
