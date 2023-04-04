import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("formdata ", formData);
  };

  const navigate = useNavigate();

  return (
    <div className="signup">
      <form>
        <h2>Sign Up</h2>
        <input
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
        />
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
      <p>Already have an account?</p>
      <button className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default Signup;
