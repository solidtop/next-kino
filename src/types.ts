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
