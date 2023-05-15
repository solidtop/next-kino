import { FC } from "react";
import { Movie } from "@/types";
import Image from "next/image";

type MovieDetailsProp = {
  movie: Movie;
};

const MovieDetails: FC<MovieDetailsProp> = ({ movie }) => {
  return (
    <>
      <div className="mt-4 lg:mt-24 lg:flex lg:max-w-screen-lg lg:mx-auto">
        <Image
          src={movie.attributes.image.url}
          width={2000}
          height={2000}
          alt="Movie poster"
          className="relative w-60 h-auto mx-auto lg:ml-6 rounded"></Image>
        <div className="">
          <h1 className="relative mx-auto text-center text-4xl font-semibold lg:ml-6 lg:text-left">
            {movie.attributes.title}
          </h1>
          <p className=" relative p-6 mx-auto lg:p-0 lg:w-4/6 lg:ml-6">
            {movie.attributes.intro}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
