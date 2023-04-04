import BookCard from "./BookCard";

const BookList = (props) => {
  const { booksData } = props;
  return (
    <>
      <h2>List of Available Books</h2>
      <div className="book-list">
        {booksData &&
          booksData.map((books) => {
            console.log(books);
            return (
              <BookCard
                key={books.id}
                controls={props.controls}
                data={books.data}
                id={books.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
