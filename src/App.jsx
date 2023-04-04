import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Manage from "./pages/Manage";
import Signup from "./pages/Signup";
import "./styles/main.scss";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;

    return children;
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="manage"
              element={
                <ProtectedRoute>
                  <Manage />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="addBook"
              element={
                <ProtectedRoute>
                  <AddBook />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
