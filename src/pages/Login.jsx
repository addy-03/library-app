import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (e) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleLogin = (e) => {
    console.log("formdata ", formData);
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="login">
      <form onSubmit={handleLogin}></form>
      <h2>Login</h2>
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
      <p>Don't have an account?</p>
      <button className="register-btn" onClick={() => navigate("/signup")}>
        Register
      </button>
    </div>
  );
};

export default Login;
