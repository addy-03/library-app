import book1 from "../assets/books/Book.jpg";
import editIcon from "../assets/icons/edit-icon.svg";
import deleteIcon from "../assets/icons/delete-icon.svg";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const { data, dispatch } = useContext(BooksContext);
  const navigate = useNavigate();
  const toggleModal = () => {
    let modalEl = document.getElementsByClassName("book-modal-container")[0];
    modalEl.classList.toggle("modal-hidden");
    console.log("BookCard", data, props);
    dispatch({ type: "CHANGE_BOOK_ID", payload: props.id });
    console.log(data);
  };

  return (
    <div className="book" onClick={toggleModal}>
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
          <img
            src={editIcon}
            alt="Edit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate("/EditForm");
            }}
          />
          <img src={deleteIcon} alt="Delete" />
        </div>
      )}
    </div>
  );
};

export default BookCard;
