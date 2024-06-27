import Cards from "./Cards";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

function Course() {
  const [headingWidth, setHeadingWidth] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      setHeadingWidth(headingRef.current.offsetWidth);
    }
  }, []);

  // Fetching the books list from backend
  const [initialBookState, setInitialBookState] = useState([]);
  const [filteredBookState, setFilteredBookState] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await axios.get(
          "http://localhost:4001/book_store/books/get_book"
        );
        setInitialBookState(books.data);
        setFilteredBookState(books.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  
  // Logic to filter the books for select course button
  const getFilteredBooks = (filter) => {
    if (filter === "Paid")
      setFilteredBookState(initialBookState.filter((data) => data.category === "Paid"));
    else if (filter === "Free")
      setFilteredBookState(initialBookState.filter((data) => data.category === "Free"));
  };
  
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1
          ref={headingRef}
          className="text-2xl font-semibold md:text-3xl inline-block"
        >
          <span className="text-blue-600">“Best practices”</span> don’t actually
          work here!
          <span className="text-blue-600"> :)</span>
        </h1>
        <p className="mt-5 mx-auto" style={{ maxWidth: headingWidth }}>
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-blue-600 text-white px-3 py-2 rounded-md border-white border-[2px] hover:bg-blue-800 duration-300 cursor-pointer"
        >
          Select Course
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52"
        >
          <li onClick={() => getFilteredBooks("Paid")}>
            <a className="hover:bg-gray-200 font-semibold">Paid</a>
          </li>
          <li onClick={() => getFilteredBooks("Free")}>
            <a className="hover:bg-gray-200 font-semibold">Free</a>
          </li>
        </ul>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {filteredBookState.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Course;
