import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("Current user", currentUser);
  const navigate = useNavigate();

  return (
    <header>
      <h1>Library App</h1>
      <button className="manage-btn">Manage</button>
      <div className="profile">
        {!currentUser && (
          <button onClick={() => navigate("/login")}>Login / SignUp</button>
        )}
        {currentUser && <div className="user">{currentUser.email}</div>}
        {currentUser && <button onClick={() => signOut(auth)}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
