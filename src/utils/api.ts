import {
  Movie,
  LoginCredentials,
  AuthResponse,
  userRegistration,
} from "@/types";

const API_URL: string = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL + "/movies");
  const payload = await res.json();
  return payload.data;
}

export async function loginUser(
  userInfo: LoginCredentials
): Promise<AuthResponse> {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("data", data);
    return data as AuthResponse;
  } else {
    throw new Error("Login failed");
  }
}

export async function registerUser(
  registrationCreds: userRegistration
): Promise<AuthResponse> {
  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationCreds),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("data", data);
    return data as AuthResponse;
  } else {
    throw new Error("User registration failed");
  }
}
