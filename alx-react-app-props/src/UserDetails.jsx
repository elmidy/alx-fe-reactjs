import UserContext from "./UserContext";
import { useContext } from "react";

export default function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
