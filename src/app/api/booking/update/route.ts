import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { tickets } = body;

  let amountTotal = 0;
  for (let i = 0; i < tickets.length; i++) {
    for (let j = 0; j < tickets[i].quantity; j++) {
      amountTotal += tickets[i].price;
    }
  }

  /* NOTE: Placeholder object for demonstrating functionality, remove when implementing api endpoint */
  const booking = {
    bookingId: 0,
    pricing: {
      amountTotal,
    },
    tickets: tickets,
    screening: {
      id: 101,
      attributes: {
        start_time: "2023-03-24T21:00:00.000Z",
        room: "Stora salongen",
        createdAt: "2023-03-12T15:56:09.684Z",
        updatedAt: "2023-03-12T15:56:09.684Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
  };

  return NextResponse.json(booking);
}
