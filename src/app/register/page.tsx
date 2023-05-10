"use client";

import { useState, FC, FormEvent, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { registerUser } from "@/utils/api";
import { userRegistration } from "@/types";

const UserRegistration: FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<userRegistration>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<userRegistration>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (ev: FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleUserRegistration = async (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

    // Reset errors
    setErrors({ name: "", email: "", password: "" });

    // Validate inputs
    let hasErrors = false;
    if (user.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name field cannot be empty",
      }));
      hasErrors = true;
    }
    if (user.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email field cannot be empty",
      }));
      hasErrors = true;
    }
    if (user.password === "") {
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
      // Call the register API
      await registerUser(user);

      // Reset form inputs
      setUser({
        name: "",
        email: "",
        password: "",
      });
      //redirect to homepage
      router.push("/");
    } catch (error) {
      // Handle any registration errors
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid credentials",
      }));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 ">Register</h2>
        <form onSubmit={handleUserRegistration}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter name"
              value={user.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 text-gray-700 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
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
              name="email"
              placeholder="Enter email address"
              value={user.email}
              onChange={handleInputChange}
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
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleInputChange}
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
            Register
          </button>
        </form>
        {/* <p className="mt-4 text-center text-gray-700">
          Don't have an account? Please{" "}
          <Link href="/register" className="text-blue-700">
            Register
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default UserRegistration;
