import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <>
      <h2>List of Available Books</h2>
      <div className="book-list">
        <BookCard controls={props.controls} />
        <BookCard controls={props.controls} />
        <BookCard controls={props.controls} />
        <BookCard controls={props.controls} />
        <BookCard controls={props.controls} />
        <BookCard controls={props.controls} />
      </div>
    </>
  );
};

export default BookList;
