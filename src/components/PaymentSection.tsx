import { FC, useState } from "react";
import Image from "next/image";
import KlarnaIcon from "../../public/icons/KlarnaIcon.png";
import MasterCardIcon from "../../public/icons/MasterCardIcon.png";
import SwishIcon from "../../public/icons/SwishIcon.png";
import VisaIcon from "../../public/icons/VisaIcon.png";

const PaymentSection: FC<any> = ({}) => {
  const [radioValue, setRadioValue] = useState<string>("cardPayment");

  const isRadioSelected = (value: string): boolean => radioValue === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setRadioValue(e.currentTarget.value);

  return (
    <>
      <div className="p-4 bg-container-color rounded">
        <div className="flex flex-row h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer order-first"
            type="radio"
            id="card-payment"
            value="cardPayment"
            name="card-payment"
            checked={isRadioSelected("cardPayment")}
            onChange={handleRadioClick}
          />
          <label className="ml-4 mt-2 font-semibold text-xl ">
            Kortbetalning
          </label>
          <Image
            src={VisaIcon}
            style={{ objectFit: "contain" }}
            alt="Icon for Visa"
            className="inline relative ml-auto left-28"
          />
          <Image
            src={MasterCardIcon}
            style={{ objectFit: "contain" }}
            alt="Icon for Mastercard"
            className="inline justify-end ml-auto"
          />
        </div>

        <div className="flex flex-row h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer"
            type="radio"
            id="swish-payment"
            value="swishPayment"
            name="swish-payment"
            checked={isRadioSelected("swishPayment")}
            onChange={handleRadioClick}
          />
          <label className="ml-4 mt-2 font-semibold text-xl">Swish</label>
          <Image
            src={SwishIcon}
            style={{ objectFit: "contain" }}
            alt="Icon for Swish"
            className="inline justify-end ml-auto mr-2"
          />
        </div>

        <div className="flex flex-row h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer"
            type="radio"
            id="klarna-payment"
            value="klarnaPayment"
            name="klarna-payment"
            checked={isRadioSelected("klarnaPayment")}
            onChange={handleRadioClick}
          />
          <label className="ml-4 mt-2 font-semibold text-xl">Klarna</label>
          <Image
            src={KlarnaIcon}
            style={{ objectFit: "contain" }}
            alt="Icon for Klarna"
            className="inline justify-end ml-auto mr-2"
          />
        </div>
      </div>

      <div className="mt-3 ml-5">
        <input
          id="save-payment"
          type="checkbox"
          value="savePayment"
          className="w-4 h-4 bg accent-btn-primary-color hover:cursor-pointer"
          required
        />
        <label htmlFor="save-payment" className="ml-3">
          Jag godkänner Sundsvallspegelns köpvillkor
        </label>
      </div>
    </>
  );
};

export default PaymentSection;
