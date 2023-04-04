import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Manage from "./pages/Manage";
import Signup from "./pages/Signup";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="manage" element={<Manage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
