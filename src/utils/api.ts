import {
  Movie,
  LoginCredentials,
  AuthResponse,
  UserRegistration,
  Screening,
  User,
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

export async function getScreening(id: string): Promise<Screening> {
  const res = await fetch(API_URL + `/screenings/${id}?populate=movie`);
  const payload = await res.json();
  return payload.data;
}
