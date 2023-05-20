export type Movie = {
  id: number;
  attributes: {
    title: string;
    imdbId: string;
    intro: string;
    image: {
      url: string;
    };
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};
export type Screening = {
  id: number;
  attributes: {
    start_time: Date;
    room: string;
    createdAt: Date;
    updatedAt: Date;
    movie: {
      data: Movie;
    };
  };
};
export type ScreeningsByMovieId = {
  id: number;
  attributes: {
    start_time: Date;
    room: string;
    createdAt: Date;
    updatedAt: Date;
  }
}

export type Ticket = {
  id: number;
  type: "Ordinarie" | "Student" | "Pensionär";
  price: number;
  quantity: number;
  maxQuantity: number;
};

export type BookingDetails = {
  id: string;
  screening: Screening;
  tickets: Ticket[];
  seats: number[];
  pricing: {
    amountTotal: number;
  };
  email: string | null;
};

export type AuthResponse = {
  token: string;
  userId: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
};

export type SeatObject = {
  seat: number;
  state: string;
};
export type movieDetailsProp = {
  movieDetails: Movie;
}
export type ScreeningProps = {
  screenings: ScreeningsByMovieId[]
}