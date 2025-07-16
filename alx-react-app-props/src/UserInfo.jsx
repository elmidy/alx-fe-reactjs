import UserDetails from "./UserDetails";
import UserContext from "./UserContext";
import { useContext } from "react";

function UserInfo() {
  const userData = useContext(UserContext);
  return <UserDetails value={userData} />;
}

export default UserInfo;
