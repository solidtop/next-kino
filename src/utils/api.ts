import { Movie } from "@/types";

const API_URL: string = "https://plankton-app-xhkom.ondigitalocean.app/API";
// GET all movies avalable
export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL + "/movies");
  const payload = await res.json();
  
  return payload.data;
}
// GET the movie with the specified id
export async function getMovieById(id: string) {
  const res = await fetch(API_URL + "/movies/" + id);
  const payload = await res.json();
  console.log(payload.data)
  return payload.data;
}
// GET all the screenings
export async function getScreenings() {
  const res = await fetch(API_URL + "/screenings/");
  const payload = await res.json();
  return payload;
}
// GET screening with specific id
export async function getScreeningsById(id: string) {
  const res = await fetch(API_URL + "/screenings/" + id);
  const payload = await res.json();
  return payload;
}

