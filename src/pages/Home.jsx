import { useContext, useEffect } from "react";
import BookList from "../components/BookList";
import BookModal from "../components/BookModal";
import Header from "../components/Header";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { BooksContext } from "../context/BooksContext";

const Home = () => {
  // const [booksData, setBooksData] = useState([]);
  const { data, dispatch } = useContext(BooksContext);

  useEffect(() => {
    // setBooksData([]);
    const q = query(collection(db, "books"));
    let books = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // setBooksData((books) => [...books, { data: doc.data(), id: doc.id }]);
        books.push({ data: doc.data(), id: doc.id });
        // setBooksData(books);
      });
      dispatch({ type: "SET_BOOKS", payload: books });
    });

    return () => unsubscribe();
  }, []);

  // console.log("Current books: ", booksData);
  return (
    <>
      <Header />
      <BookList booksData={data.books} />
      <BookModal />
    </>
  );
};

export default Home;
