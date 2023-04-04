import book1 from "../assets/books/Book.jpg";
import editIcon from "../assets/icons/edit-icon.svg";
import deleteIcon from "../assets/icons/delete-icon.svg";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const BookCard = (props) => {
  const { data, dispatch } = useContext(BooksContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleModal = () => {
    let modalEl = document.getElementsByClassName("book-modal-container")[0];
    modalEl.classList.toggle("modal-hidden");
    console.log("BookCard", data, props);
    dispatch({ type: "CHANGE_BOOK_ID", payload: props.id });
    console.log(data);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      console.log("Librarian Must Login to Delete Books");
      return;
    }

    deleteDoc(doc(db, "books", props.id)).then(navigate("/manage"));
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
            title="Edit"
            src={editIcon}
            alt="Edit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch({ type: "CHANGE_BOOK_ID", payload: props.id });
              navigate("/editBook");
            }}
          />
          <img
            title="Delete"
            src={deleteIcon}
            alt="Delete"
            onClick={(e) => handleDelete(e)}
          />
        </div>
      )}
    </div>
  );
};

export default BookCard;
