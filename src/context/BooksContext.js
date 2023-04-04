import { createContext, useReducer } from "react";

export const BooksContext = createContext();
export const BooksContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    books: [],
    currentBookID: null,
  };

  const booksReducer = (state, actions) => {
    switch (actions.type) {
      case "CHANGE_BOOK_ID":
        console.log("payload", actions.payload);
        return {
          ...state,
          currentBookID: actions.payload,
        };
      case "SET_BOOKS":
        return { ...state, books: actions.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(booksReducer, INITIAL_STATE);

  return (
    <BooksContext.Provider value={{ data: state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
