import { useContext } from "react";
import book1 from "../assets/books/Book.jpg";
import { BooksContext } from "../context/BooksContext";

const BookModal = () => {
  const { data } = useContext(BooksContext);
  console.log("Modal data", data);

  const bookData = data?.books.filter(
    (book) => book.id === data.currentBookID
  )[0];
  console.log("Modal bookData", bookData);

  const closeModal = () => {
    let modalEl = document.getElementsByClassName("book-modal-container")[0];
    modalEl.classList.toggle("modal-hidden");
  };

  return (
    <>
      <div className="book-modal-container modal-hidden">
        {bookData && (
          <div className="book-modal book">
            <img src={bookData.data.image} alt="" className="cover-image" />
            <div className="details">
              <div className="title">
                <b>Title:</b> {bookData.data.title}
              </div>
              <div className="author">
                <b>Author:</b> {bookData.data.author}
              </div>
              <div className="genres">
                <b>Genres:</b> {bookData.data.genres?.join(", ")}
              </div>
              <div className="excerpt">
                <b>Excerpt:</b> {bookData.data.excerpt}
              </div>
            </div>
          </div>
        )}
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
      </div>
      {/* {!bookData && <div>No Data Available</div>} */}
    </>
  );
};

export default BookModal;
