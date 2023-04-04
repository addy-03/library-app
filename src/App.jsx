import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Manage from "./pages/Manage";
import Signup from "./pages/Signup";
import "./styles/main.scss";

function App() {
  return (
    <div className="container">
      {/* <Home /> */}
      <Manage />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
