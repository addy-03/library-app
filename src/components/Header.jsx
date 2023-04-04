import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log("Current user", currentUser);
  // console.log("user ID", currentUser?.uid);
  const navigate = useNavigate();
  const location = useLocation();

  const onLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";
  // console.log("location", onLoginPage);

  return (
    <header>
      <h1>Library App</h1>
      <div className="nav">
        <Link className="home-btn" to="/">
          Home
        </Link>
        <Link className="manage-btn" to="/manage">
          Manage
        </Link>
      </div>
      {!onLoginPage && (
        <div className="profile">
          {!currentUser && (
            <button onClick={() => navigate("/login")}>Login / SignUp</button>
          )}
          {currentUser && <div className="user">{currentUser.email}</div>}
          {currentUser && <button onClick={() => signOut(auth)}>Logout</button>}
        </div>
      )}
    </header>
  );
};

export default Header;
