"use client";
import { useState, FC, FormEvent, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { loginUser } from "@/utils/api";
import { LoginCredentials } from "@/types";
import Loader from "@/components/Loader";

interface LoginModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: FC<LoginModalProps> = ({ setShowModal }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserLogin = async (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "" });

    // Validate inputs
    let hasErrors = false;
    if (email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email field cannot be empty",
      }));
      hasErrors = true;
    }
    if (password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password field cannot be empty",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      setIsLoading(true);
      // Call the login API
      await loginUser({ email, password });

      // Reset form inputs and close the modal

      setEmail("");
      setPassword("");
      setShowModal(false);
    } catch (error) {
      // Handle any login errors
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid credentials",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 ">Login</h2>
        <form onSubmit={handleUserLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(ev: FormEvent<HTMLInputElement>) => {
                setEmail(ev.currentTarget.value);
              }}
              className={`w-full px-4 py-2 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(ev: FormEvent<HTMLInputElement>) => {
                setPassword(ev.currentTarget.value);
              }}
              className={`w-full px-4 py-2 text-gray-700 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-container-color text-white py-2 px-4 rounded-lg font-medium"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Don&apos;t have an account? Please{" "}
          <Link href="/register" className="text-blue-700">
            Register
          </Link>
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      </div>

      {isLoading && <Loader />}
    </div>
  );
};

export default LoginModal;
