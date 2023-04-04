import BookList from "../components/BookList";
import BookModal from "../components/BookModal";

const Home = () => {
  return (
    <>
      <div className="container">
        <BookList />
      </div>
      <BookModal />
    </>
  );
};

export default Home;
