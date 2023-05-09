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
  seats: [];
  pricing: {
    amountTotal: number;
  };
  email: string | null;
};

export type User = {
  email: string;
  name: string;
};
