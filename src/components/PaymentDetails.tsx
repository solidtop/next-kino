import { FC, SetStateAction } from "react";
import Link from "next/link";
import { Dispatch } from "react";

type PaymentProps = {
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
  setCardMonth: Dispatch<SetStateAction<number>>;
  setCardYear: Dispatch<SetStateAction<number>>;
  setCcv: Dispatch<SetStateAction<string>>;
};

const PaymentDetails: FC<PaymentProps> = ({
  cardNumber,
  setCardNumber,
  setCardMonth,
  setCardYear,
  setCcv,
}) => {
  const monthArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const yearArray: number[] = [0, 1, 2, 3, 4];

  const futureYears = (yearInterval: number): number => {
    const currentYear = new Date();
    const futureYear = currentYear.getFullYear() + yearInterval;

    return futureYear;
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Fyll i dina kortdetaljer</h2>
        <p className="mt-4">
          Fyll i dina kortuppgifter nedan och klicka på “Betala” för att
          slutföra köpet. Kom ihåg att ta med dig något av korten som användes
          vid köpet, eller din köpbekräftelse med referensnummer och kod, när du
          ska hämta ut dina biljetter.
        </p>
      </div>

      <div className="mt-8">
        <label htmlFor="cardNumber">Kortnummer</label>
        <input
          id="cardNumber"
          value={cardNumber}
          maxLength={12}
          onChange={(ev) => {
            setCardNumber(ev.target.value);
          }}
          className="w-full h-10 block p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
          placeholder="0000 0000 0000 0000"
          required></input>
      </div>

      <label htmlFor="validityMonth" className="relative top-6">
        Giltighetstid
      </label>
      <div className="mt-6 flex flex-row justify-center gap-3 w-5/5">
        <select
          id="validityMonth"
          onChange={(ev) => {
            setCardMonth(parseInt(ev.target.value));
          }}
          className="h-10 w-3/5 block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700">
          {monthArray.map((month) => {
            return (
              <option className="bg-container-color" value={`${month}`}>
                {month}
              </option>
            );
          })}
        </select>

        <select
          id="validityYear"
          onChange={(ev) => {
            setCardYear(parseInt(ev.target.value));
          }}
          className="h-10 w-3/5  block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700">
          {yearArray.map((yearInterval) => {
            return (
              <option
                className="bg-container-color"
                value={`${futureYears(yearInterval)}`}>
                {futureYears(yearInterval)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-6">
        <label>Verifikationskod</label>
        <input
          id="ccv"
          maxLength={3}
          onChange={(ev) => {
            setCcv(ev.target.value);
          }}
          className="w-full h-10 block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
          placeholder="000"
          required></input>
      </div>

      <div className="mt-8 flex flex-row gap-8">
        <Link
          href="#"
          onClick={() => history.go(-1)}
          className="block w-full my-8 py-2 rounded-full bg-container-color hover:brightness-110 text-center font-semibold">
          Avbryt
        </Link>
        <button
          type="submit"
          className="block w-full my-8 py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
          Betala
        </button>
      </div>
    </>
  );
};

export default PaymentDetails;
