import book1 from "../assets/books/Book.jpg";
import editIcon from "../assets/icons/edit-icon.svg";
import deleteIcon from "../assets/icons/delete-icon.svg";

const BookCard = (props) => {
  return (
    <div className="book">
      <img src={props.data.image} alt="" className="cover-image" />
      <div className="details">
        <div className="title">
          <b>Title:</b> {props.data.title}
        </div>
        <div className="author">
          <b>Author:</b> {props.data.author}
        </div>
        <div className="genres">
          <b>Genres:</b> {props?.data.genres?.join(", ")}
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
