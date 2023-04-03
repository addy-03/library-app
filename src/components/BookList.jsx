import BookCard from "./BookCard";

const BookList = () => {
  return (
    <>
      <h2>List of Available books</h2>
      <div className="book-list">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
};

export default BookList;
