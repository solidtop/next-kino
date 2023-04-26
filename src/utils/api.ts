import { Movie } from "@/types";

const APIData: string = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(APIData + "/movies");
  const payload = await res.json();
  return payload.data;
}
