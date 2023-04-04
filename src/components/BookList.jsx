// import { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
// import { AuthContext } from "../context/AuthContext";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "../firebase";

const BookList = (props) => {
  return (
    <>
      <h2>List of Available Books</h2>
      <div className="book-list">
        {props.booksData &&
          props.booksData.map((data, i) => {
            return <BookCard key={i} controls={props.controls} data={data} />;
          })}
      </div>
    </>
  );
};

export default BookList;
