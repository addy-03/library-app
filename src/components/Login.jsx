import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleLogin = () => {
    console.log("formdata ", formData);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="email"
        name="Email"
        id="email"
        placeholder="Email"
        required
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
        onChange={(e) =>
          setFormData((state) => {
            return { ...state, password: e.target.value };
          })
        }
      />
      <button onClick={handleLogin} className="login-btn">Login</button>
      <p>Don't have an account?</p>
      <button className="register-btn">Register</button>
    </div>
  );
};

export default Login;
