export type Movie = {
  id: number;
  attributes: {
    title: string;
    imdbId: string;
    intro: string;
    image: {
      url: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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

export type Booking = {
  id: number;
  pricing: {
    amountTotal: number;
  };
  screening: Screening;
};
