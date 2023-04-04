import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Manage = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "books"),
      where("uploadedBy", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBooksData((books) => [...books, doc.data()]);
      });
    });

    return () => unsubscribe();
  }, [currentUser.uid]);

  console.log("Current books: ", booksData);

  return (
    <>
      <Header />
      <button className="add-book-btn" onClick={() => navigate("/addBook")}>
        Add Book
      </button>
      <BookList controls={true} booksData={booksData} />
    </>
  );
};

export default Manage;
