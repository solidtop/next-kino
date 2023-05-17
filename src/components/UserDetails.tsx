import { FC } from "react";
import { User } from "@/types";

type UserDetailsProps = {
  user: User;
};

const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="p-4 bg-container-color rounded">
      <ul className="">
        <li className="mb-4 text-xl font-bold">{user && user.name}</li>
        <li>{user && user.email}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
