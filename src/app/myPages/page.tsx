"use client";
import Header from "@/components/Header";
import UserInformation from "@/components/UserInformation";
import { useEffect, useState } from "react";

export default function MyPages() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setCurrentUser(user);
  }, []);

  return (
    <>
      <Header />
      <UserInformation currentUser={currentUser} />
    </>
  );
}
