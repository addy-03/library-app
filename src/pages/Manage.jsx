import BookList from "../components/BookList";
import Header from "../components/Header";

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
