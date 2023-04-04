import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Manage from "./pages/Manage";
import Signup from "./pages/Signup";
import "./styles/main.scss";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="manage" element={<Manage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="addBook" element={<AddBook />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
