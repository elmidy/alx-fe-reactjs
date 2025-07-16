import "./App.css";
import ProfilePage from "./ProfilePage.jsx";
import UserContext from "./UserContext.js";

function App() {
  const userData = { name: "Jan Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />
    </UserContext.Provider>
  );
}

export default App;
