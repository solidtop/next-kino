import { FC } from "react";
import { movieDetailsProp } from "@/types";
import Link from "next/link";
import Image from "next/image";
import ChevronIcon from "../../public/icons/chevron-left-solid.svg";

const MovieDetails: FC<movieDetailsProp> = ({ movieDetails }) => {
  return (
    <>
      <div className="w-full px-1 pt-4 relative">
        <Link
          href="/"
          className=" top-36 right-3/4 inline-flex items-center h-8 px-4 rounded  bg-btn-primary-color hover:brightness-110">
          <Image src={ChevronIcon} alt="chevron left" className="w-2 mr-2" />
          Tillbaka
        </Link>
      </div>
      <div>
        <div className="mt-4 lg:mt-24 lg:flex lg:max-w-screen-lg lg:mx-auto">
          <Image
            src={movieDetails.attributes.image.url}
            width={2000}
            height={2000}
            alt="Movie poster"
            className="relative w-60 h-auto mx-auto lg:ml-6 rounded"></Image>
          <div>
            <h3 className="relative mx-auto text-center text-4xl font-semibold lg:ml-6 lg:text-left">
              {movieDetails.attributes.title}
            </h3>
            <p className=" relative p-6 mx-auto lg:p-0 lg:w-4/6 lg:ml-6">
              {movieDetails.attributes.intro}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
