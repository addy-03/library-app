import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";

const Login = (e) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("formdata ", formData);

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setError(true);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="login">
        <h2>Login</h2>
        <form>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, email: e.target.value };
              })
            }
          />
          <input
            type="password"
            name="Password"
            id="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, password: e.target.value };
              })
            }
          />
          <button
            onClick={(e) => handleLogin(e)}
            className="login-btn"
            type="submit"
          >
            Login
          </button>
        </form>
        {error && <p className="error">An Error Occured</p>}
        <p>Don't have an account?</p>
        <button className="register-btn" onClick={() => navigate("/signup")}>
          Register
        </button>
      </div>
    </>
  );
};

export default Login;
