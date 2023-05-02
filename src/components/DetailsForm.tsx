import { FC } from "react";

const DetailsForm: FC = () => {
  return (
    <div className="p-4 bg-container-color rounded">
      <label htmlFor="email">E-post</label>
      <input
        type="email"
        id="email"
        placeholder="Ange e-postadress"
        className="block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none"
        required
      />
      <p className="my-4">Eller</p>
      <button
        type="button"
        className="block w-full py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold"
      >
        Logga in / Bli medlem
      </button>
    </div>
  );
};

export default DetailsForm;
