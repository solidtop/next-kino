import { FC } from "react";
import { User } from "@/types";

type UserDetailsProps = {
  user: User;
};

const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="p-4 bg-container-color rounded">
      <ul className="">
        <li className="mb-4 text-xl font-bold">{user.name}</li>
        <li>{user.email}</li>
        <li className="mt-4 font-bold">Du har 5 bonuspoäng</li>
      </ul>
    </div>
  );
};

export default UserDetails;
