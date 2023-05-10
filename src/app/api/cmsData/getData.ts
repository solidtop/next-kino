const api = "https://plankton-app-xhkom.ondigitalocean.app/api";

// GET all movies avalable
async function getMovies() {
  const res = await fetch(api + "/movies");
  const payload = await res.json();
  console.log(payload.data[0])
  return payload;
}
// GET the movie with the specified id
async function getMovieById(id) {
  const res = await fetch(api + "/movies/" + id);
  const payload = await res.json();
  return payload;
}
async function getScreenings() {
  const res = await fetch(api + "/screenings/");
  const payload = await res.json();
  return payload;
}
async function getScreeningsById(id) {
  const res = await fetch(api + "/screenings/" + id);
  const payload = await res.json();
  return payload;
}
getMovies()
