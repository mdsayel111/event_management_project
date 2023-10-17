import React from "react";

const BookedCard = ({item}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={item.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.event}</h2>
          <p className="text-basen text-primary">Price : <span className="font-semibold">{item.price}</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookedCard;
