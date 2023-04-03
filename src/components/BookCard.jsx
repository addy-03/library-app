import book1 from "../assets/books/Book.jpg";

const BookCard = () => {
  return (
    <div className="book">
      <img src={book1} alt="" className="cover-image" />
      <div className="details">
        <div className="title">Book Title</div>
        <div className="author">Author</div>
        <div className="genres">genres genres</div>
        <div className="excerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          architecto laudantium, repellendus ad autem saepe minima magni eveniet
          assumenda ratione debitis consequatur illum voluptas non?
        </div>
      </div>
    </div>
  );
};

export default BookCard;
