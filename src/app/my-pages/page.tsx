import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserInformation from "@/components/my-pages/UserInformation";
import { Ticket } from "@/types";
import { getMovies } from "@/utils/api";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import connectDb from "@/utils/connectDb";
import TicketsModel from "@/models/tickets";
import MyPagesContent from "@/components/my-pages/MyPagesContent";
import BackButton from "@/components/BackButton";

type TicketObject = {
  bookingId: string;
  email: string;
  movie: string;
  screeningId: number;
  seats: number[];
  startTime: string;
  tickets: Ticket[];
};

const getMovieList = async () => {
  try {
    const res = await getMovies();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default async function MyPages() {
  const jwt = cookies().get("u-session")?.value;

  if (!jwt) {
    return <MyPagesContent />;
  }

  try {
    const payload = JWT.verify(jwt, process.env.JWT_SECRET as string);
    const userInfo = typeof payload == "object" ? payload.sessionObject : null;
    const userEmail = userInfo.email;

    connectDb();
    const tickets: Array<TicketObject> = await TicketsModel.find({
      email: userEmail,
    });

    const movies = await getMovieList();

    return (
      <>
        <Header />
        <div className="flex flex-col max-w-screen-xl mx-auto">
          <BackButton />
          {movies && (
            <div className="max-w-screen-sm mx-auto my-4 px-4">
              <UserInformation
                currentUser={userInfo}
                userTickets={tickets}
                movies={movies}
              />
            </div>
          )}
          {!movies && (
            <p className="text-lg mx-auto my-4">Du har inga bokade biljetter</p>
          )}
        </div>
        <Footer />
      </>
    );
  } catch (err) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4 mt-4">
        <h1>Invalid session!</h1>
        <p>Did you tamper with your cookie?</p>
      </div>
    );
  }
}
