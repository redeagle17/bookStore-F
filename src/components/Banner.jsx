import React from "react";
import banner_right_hd from "../../public/banner_right_hd.png";

export default function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mt-16">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-7">
          <h1 className="text-4xl text-white font-bold dark:text-black">
            bookStore welcomes you to inculcate {""}
            <span className="text-blue-600">reading habit.</span>
          </h1>
          <p className="text-l text-white dark:text-black">
            A utility-first CSS framework packed with classes like{" "}
            <span className="text-blue-600">
              flex, pt-4, text-center and rotate-90
            </span>{" "}
            that can be composed to build any design, directly in your markup.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            ab culpa officiis! Magni, beatae consectetur, commodi deserunt ab
            itaque, impedit ea explicabo quod cum eligendi dignissimos molestiae
            molestias id voluptates.
          </p>
          <label className="input input-bordered flex items-center gap-2 dark:bg-white dark:border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-white opacity-70 dark:text-black"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
          <div className="py-3">
            <a className="bg-blue-600 text-white px-3 py-2 rounded-md border hover:bg-blue-800 duration-300 cursor-pointer">
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 md:w-1/2 flex justify-center items-center">
        <img src={banner_right_hd} alt="" />
      </div>
    </div>
  );
}
