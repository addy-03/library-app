import BookList from "./components/BookList";
import Header from "./components/Header";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <BookList />
      </div>
    </div>
  );
}

export default App;
