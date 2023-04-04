// import { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
// import { AuthContext } from "../context/AuthContext";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "../firebase";

const BookList = (props) => {
  const { booksData } = props;
  return (
    <>
      <h2>List of Available Books</h2>
      <div className="book-list">
        {booksData &&
          booksData.map((books) => {
            console.log(books)
            return <BookCard key={books.id} controls={props.controls} data={books.data} />;
          })}
      </div>
    </>
  );
};

export default BookList;
