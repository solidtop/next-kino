import { Movie, LoginCredentials, LoginResponse } from "@/types";

const API_URL: string = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL + "/movies");
  const payload = await res.json();
  return payload.data;
}

export async function loginUser(
  userInfo: LoginCredentials
): Promise<LoginResponse> {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (res.ok) {
    const data = await res.json();
    return data as LoginResponse;
  } else {
    throw new Error("Login failed");
  }
}
