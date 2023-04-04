import BookList from "../components/BookList";
import Header from "../components/Header";
import Login from "./Login";
import Signup from "./Signup";

const Manage = () => {
  return (
    <>
      <Header />
      <button className="add-book">Add Book</button>
      <BookList controls={true} />
    </>
  );
};

export default Manage;
