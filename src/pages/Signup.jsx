import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";

const Signup = () => {
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log("formdata ", formData);

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
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
      <div className="signup">
        <h2>Sign Up</h2>
        <form>
          {/* <input
          type="text"
          name="Name"
          id="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((state) => {
              return { ...state, name: e.target.value };
            })
          }
        /> */}
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
          <button onClick={(e) => handleSignup(e)} type="submit">
            Sign Up
          </button>
        </form>
        {error && <p className="error">An Error Occured</p>}
        <p>Already have an account?</p>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </>
  );
};

export default Signup;
