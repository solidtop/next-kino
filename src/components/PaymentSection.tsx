import { FC, useState } from "react";

const PaymentSection: FC<any> = ({}) => {
  const [radioValue, setRadioValue] = useState<string>("cardPayment");

  const isRadioSelected = (value: string): boolean => radioValue === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setRadioValue(e.currentTarget.value);

  return (
    <div className="p-4 bg-container-color rounded">
      <div className=" h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
        <input
          className="my-3 ml-4 w-5 h-5"
          type="radio"
          id="card-payment"
          value="cardPayment"
          name="card-payment"
          checked={isRadioSelected("cardPayment")}
          onChange={handleRadioClick}
        />
        <label className="ml-4 font-semibold text-xl">Kortbetalning</label>
      </div>
      <div className=" h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
        <input
          className="my-3 ml-4 w-5 h-5"
          type="radio"
          id="swish-payment"
          value="swishPayment"
          name="swish-payment"
          checked={isRadioSelected("swishPayment")}
          onChange={handleRadioClick}
        />
        <label className="ml-4 font-semibold text-xl">Swish</label>
      </div>

      <div className="mt-6">
        <input
          id="save-payment"
          type="checkbox"
          value="savePayment"
          className="w-4 h-4 bg accent-btn-primary-color"
        />
        <label htmlFor="save-payment" className="ml-3">
          Spara mina betalningsuppgifter
        </label>
      </div>
    </div>
  );
};

export default PaymentSection;
