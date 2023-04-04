import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleSignup = () => {
    console.log("formdata ",formData);
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="Name"
        id="name"
        placeholder="Name"
        required
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
