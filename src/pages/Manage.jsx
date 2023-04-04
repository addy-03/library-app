import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import BookModal from "../components/BookModal";

const Manage = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    // console.log("currentUser", currentUser);
    setBooksData([]);
    if (Object.keys(currentUser).length !== 0) {
      const q = query(
        collection(db, "books"),
        where("uploadedBy", "==", currentUser.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBooksData((books) => [...books, { data: doc.data(), id: doc.id }]);
        });
      });

      return () => unsubscribe();
    }
  }, [currentUser, currentUser.uid]);

  // console.log("Current books: ", booksData);

  return (
    <>
      <Header />
      <button className="add-book-btn" onClick={() => navigate("/addBook")}>
        Add Book
      </button>
      <BookList controls={currentUser !== null} booksData={booksData} />
      <BookModal />
    </>
  );
};

export default Manage;
