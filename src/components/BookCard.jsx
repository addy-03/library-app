import book1 from "../assets/books/Book.jpg";
import editIcon from "../assets/icons/edit-icon.svg";
import deleteIcon from "../assets/icons/delete-icon.svg";

const BookCard = (props) => {
  return (
    <div className="book">
      <img src={book1} alt="" className="cover-image" />
      <div className="details">
        <div className="title">
          <b>Title: {props.data.title}</b>
        </div>
        <div className="author">
          <b>Author: {props.data.author}</b>
        </div>
        <div className="genres">
          <b>Genres: {props.data.genres.join(", ")}</b>
        </div>
        <div className="excerpt">
          <b>Excerpt:</b> {props.data.excerpt}
        </div>
      </div>
      {props.controls && (
        <div className="controls">
          <img src={editIcon} alt="Edit" />
          <img src={deleteIcon} alt="Delete" />
        </div>
      )}
    </div>
  );
};

export default BookCard;
