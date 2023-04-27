import { Movie } from "@/types";

const API_URL: string = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL + "/movies");
  const payload = await res.json();
  return payload.data;
}
