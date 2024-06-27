import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-blue-600 text-white border-black shadow-xl hover:scale-105 duration-200 h-[28rem]">
        <figure>
          <img src={item.image} />
        </figure>
        <div className="card-body h-[15rem]">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary rounded-md">
              {item.category}
            </div>
          </h2>
          <p className="pt-4">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-secondary rounded-md">
              ${item.price}
            </div>
            <div className=" cursor-pointer px-2 py-1 rounded-md border-white border-[2px] hover:bg-blue-800 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
