import { FC } from "react";
import { Movie, Screening } from "@/types";

const MovieDetails:FC<Movie> = ({ movieDetails }) => {

  return (
    <ul>
      <li>
        <h3>{movieDetails.attributes.title}</h3>
        <img className="block w-40" src={movieDetails.attributes.image.url} alt="" />
        <p>{movieDetails.attributes.intro}</p>
      </li>
    </ul>
  );
}
export default MovieDetails;

