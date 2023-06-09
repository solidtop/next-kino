"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import BookingSummary from "@/components/booking/BookingSummary";
import TicketMenu from "@/components/booking/TicketMenu";
import NumericHeader from "@/components/booking/NumericHeader";
import DetailsForm from "@/components/booking/DetailsForm";
import UserDetails from "@/components/booking/UserDetails";
import ErrorMessage from "@/components/ErrorMessage";
import SeatingChart from "@/components/booking/SeatingChart";
import SeatingLegend from "@/components/booking/SeatingLegend";
import { getTicketsQuantity } from "@/utils/validation";
import PaymentSection from "@/components/booking/PaymentSection";
import Loader from "@/components/Loader";
import { BookingDetails, User } from "@/types";
import { getUserSession } from "@/utils/api";
export default function Content() {
  const [user, setUser] = useState<User>({
    email: null,
    name: null,
  });
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [seatingDetails, setSeatingDetails] = useState<Array<number>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const timer = useRef<number | undefined>(undefined);

  const params = useParams();
  const { push } = useRouter();

  useEffect(() => {
    handleUserSession();
  }, []);

  const handleUserSession = async () => {
    try {
      const payload = await getUserSession();
      if (user.name == payload.name) {
        return;
      } else {
        setUser(payload);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch & register booking details from server API
  useEffect(() => {
    const loadBookingDetails = async () => {
      try {
        const res = await fetch("/api/booking/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ screeningId: params.screeningId }),
        });
        const payload = await res.json();
        if (payload.error) {
          handleError(payload.error);
          return;
        }
        setBookingDetails(payload);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBookingDetails();
    loadSeating(params.screeningId);
  }, []);

  const handleUpdate = (bookingDetails: BookingDetails): void => {
    clearTimeout(timer.current);

    // Set delay before sending request (prevents request spam)
    timer.current = window.setTimeout(async () => {
      try {
        const res = await fetch("/api/booking/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingDetails),
        });
        const payload = await res.json();
        if (payload.error) {
          handleError(payload.error);
          return;
        }

        setBookingDetails(payload);

        const ticketQuantity = getTicketsQuantity(bookingDetails.tickets);
        if (getTicketsQuantity(payload.tickets) !== ticketQuantity) {
          loadSeating(params.screeningId);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setError("");
      }

      if (user.name == null) {
        handleUserSession();
      }
    }, 1000);
  };

  const handleSubmit = async (bookingDetails: BookingDetails) => {
    try {
      const res = await fetch("/api/booking/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });
      const payload = await res.json();
      if (payload.error) {
        handleError(payload.error);
        return;
      }
      push(`/booking/${params.screeningId}/payment`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = (error: { message: string; code?: number }): void => {
    if (error.code === 401) {
      alert(error.message);
      push("/"); // If unauthorized, return back to home page
      return;
    }

    setError(error.message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadSeating = async (screeningId: string) => {
    try {
      const res = await fetch(`/api/seating?screeningId=${screeningId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = await res.json();
      setSeatingDetails(payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto relative">
      <BackButton />

      {bookingDetails && (
        <>
          <BookingSummary bookingDetails={bookingDetails} />
          <main className="flex flex-col gap-y-4 md:w-2/3 lg:w-1/2 p-4 lg:mx-auto">
            <h1 className="text-2xl font-semibold">Boka Biljetter</h1>
            {error && <ErrorMessage error={error} setError={setError} />}

            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                handleSubmit(bookingDetails);
              }}
            >
              <section id="tickets">
                <NumericHeader number="1" title="Välj biljettyper" />
                <TicketMenu
                  bookingDetails={bookingDetails}
                  onUpdate={handleUpdate}
                />
              </section>
              <section id="seating">
                <NumericHeader number="2" title="Välj sittplatser" />
                <SeatingChart
                  bookingDetails={bookingDetails}
                  seatingDetails={seatingDetails}
                  onUpdate={handleUpdate}
                />
                <SeatingLegend />
              </section>
              <section id="details">
                <NumericHeader number="3" title="Fyll i detaljer" />
                {user.name == null && (
                  <DetailsForm
                    bookingDetails={bookingDetails}
                    setBookingDetails={setBookingDetails}
                  />
                )}
                {user.name !== null && <UserDetails user={user} />}
              </section>

              <section id="payment">
                <NumericHeader number="4" title="Betalning" />
                <PaymentSection />
              </section>

              <button
                type="submit"
                className="block w-full my-8 py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold"
              >
                Fortsätt
              </button>
            </form>
          </main>
        </>
      )}

      {isLoading && <Loader />}
    </div>
  );
}
