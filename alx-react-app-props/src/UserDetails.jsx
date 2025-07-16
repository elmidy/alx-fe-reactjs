import UserContext from "./UserContext";

export default function UserDetails({ userData }) {
  return (
    <UserContext.Provider value={userData}>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </UserContext.Provider>
  );
}
