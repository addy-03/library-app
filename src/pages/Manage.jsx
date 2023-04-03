import BookList from "../components/BookList";

const Manage = () => {
  return (
    <div className="container manage">
      <button className="add-book">Add Book</button>
      <BookList controls={true} />
    </div>
  );
};

export default Manage;
