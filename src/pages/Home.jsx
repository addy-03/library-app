import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookModal from "../components/BookModal";
import Header from "../components/Header";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    setBooksData([]);
    const q = query(collection(db, "books"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBooksData((books) => [...books, { data: doc.data(), id: doc.id }]);
      });
    });

    return () => unsubscribe();
  }, []);

  console.log("Current books: ", booksData);
  return (
    <>
      <Header />
      <BookList booksData={booksData} />
      <BookModal />
    </>
  );
};

export default Home;
