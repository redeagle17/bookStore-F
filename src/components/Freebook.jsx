import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {

  const [free_book, setFreeBook] = useState([]);
  useEffect(() => {
    const freeBooks = async () => {
      try {
        const books = await axios.get(
          "https://book-store-backend-alpha.vercel.app/book_store/books/get_book"
        );
        setFreeBook(books.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    freeBooks();
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-bold text-xl pb-2 text-white dark:text-black">
            Free Books
          </h1>
          <p className="text-l text-white dark:text-black">
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {free_book.map((item) => (
              // React Props (Sending data from parent component to child compoment)
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
