import BookList from "../components/BookList";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Manage = () => {
  return (
    <>
      <div className="container manage">
        <button className="add-book">Add Book</button>
        <BookList controls={true} />
      </div>
      <div id="login" className="modal-container">
        <Login />
        <Signup/>
      </div>
    </>
  );
};

export default Manage;
