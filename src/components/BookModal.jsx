import book1 from "../assets/books/Book.jpg";

const BookModal = () => {
  const closeModal = () => {
    let loginEl = document.getElementsByClassName("book-modal-container")[0];
    // console.log(loginEl);
    loginEl.classList.toggle("modal-hidden");
  };

  return (
    <div className="book-modal-container modal-hidden">
      <div className="book-modal book">
        <img src={book1} alt="" className="cover-image" />
        <div className="details">
          <div className="title">
            <b>Title:</b>{" "}
          </div>
          <div className="author">
            <b>Author:</b>{" "}
          </div>
          <div className="genres">
            <b>Genres:</b>{" "}
          </div>
          <div className="excerpt">
            <b>Excerpt:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint architecto laudantium, repellendus ad autem saepe minima
            magni eveniet assumenda ratione debitis consequatur illum voluptas
            non?
          </div>
        </div>
      </div>
      <span className="close-btn" onClick={closeModal}>
        &times;
      </span>
    </div>
  );
};

export default BookModal;
