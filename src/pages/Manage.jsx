import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import Header from "../components/Header";

const Manage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <button className="add-book" onClick={() => navigate("/addBook")}>
        Add Book
      </button>
      <BookList controls={true} />
    </>
  );
};

export default Manage;
