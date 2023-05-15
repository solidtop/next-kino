import { FC } from "react";


const MovieDetails:FC = ({ movieDetails }) => {

  return (
    <ul>
      <li>
        <h3>{movieDetails.attributes.title}</h3>
        <img src={movieDetails.attributes.image.url} alt="" />
        <p>{movieDetails.attributes.intro}</p>
      </li>
    </ul>
  );
}
export default MovieDetails;

/*
    id: 1,
    attributes: {
      title: 'Isle of dogs',
      imdbId: 'tt5104604',
      intro: 'An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.',
      image: [Object],
      createdAt: '2023-01-23T05:58:58.110Z',
      updatedAt: '2023-01-27T07:11:53.523Z',
      publishedAt: '2023-01-23T06:01:31.679Z'
    }
*/
