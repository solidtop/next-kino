import { BookingDetails } from "@/types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";

type DetailsFormProps = {
  bookingDetails: BookingDetails;
  setBookingDetails: Dispatch<SetStateAction<BookingDetails | null>>;
};

const DetailsForm: FC<DetailsFormProps> = ({
  bookingDetails,
  setBookingDetails,
}) => {
  const [email, setEmail] = useState<string>(bookingDetails.email || "");
  return (
    <div className="p-4 bg-container-color rounded">
      <label htmlFor="email-booking">E-post</label>
      <input
        type="email"
        id="email-booking"
        placeholder="Ange e-postadress"
        className="block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
        value={email}
        onChange={(ev) => {
          setEmail(ev.target.value);
          setBookingDetails({
            ...bookingDetails,
            email: ev.target.value,
          });
        }}
        required
      />
      <p className="my-4">Eller</p>
      <Link
        href={"/my-pages"}
        type="button"
        className="block w-full py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
        Logga in / Bli medlem
      </Link>
    </div>
  );
};

export default DetailsForm;
