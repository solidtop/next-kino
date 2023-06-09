import {
  Movie,
  LoginCredentials,
  AuthResponse,
  UserRegistration,
  Screening,
  User,
  ScreeningsByMovieId,
} from "@/types";

const API_URL: string = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function loginUser(userInfo: LoginCredentials): Promise<Boolean> {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (res.ok) {
      return true;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    throw new Error("An error occurred during login");
  }
}

export async function registerUser(
  registrationCreds: UserRegistration
): Promise<AuthResponse> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationCreds),
  });

  if (res.ok) {
    const data = await res.json();
    return data as AuthResponse;
  } else {
    throw new Error("User registration failed");
  }
}

export async function getUserSession(): Promise<User> {
  const res = await fetch("/api/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const payload = await res.json();
    return payload;
  } else {
    throw new Error("Attempt to get user session failed");
  }
}

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL + "/movies");
  const payload = await res.json();

  return payload.data;
}
// GET the movie with the specified id
export async function getMovie(id: string): Promise<Movie> {
  const res = await fetch(API_URL + "/movies/" + id);
  const payload = await res.json();
  return payload.data;
}
// GET all the screenings
export async function getScreenings(): Promise<Screening[]> {
  const res = await fetch(API_URL + "/screenings/");
  const payload = await res.json();
  return payload;
}
// GET screening with specific id
export async function getScreeningById(
  id: string
): Promise<ScreeningsByMovieId[]> {
  const res = await fetch(
    API_URL + `/screenings?filters[movie]=` + id + `&sort[start_time]=asc`
  );
  const payload = await res.json();
  return payload.data;
}
export async function getScreening(id: string): Promise<Screening> {
  const res = await fetch(API_URL + `/screenings/${id}?populate=movie`);
  const payload = await res.json();
  return payload.data;
}
