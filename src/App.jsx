import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import Header from "./components/Header";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Manage />
    </div>
  );
}

export default App;
