import React from "react";
import { Link } from "react-router-dom";

const Survice = ({survice}) => {
    const {img, event, description, price, id} = survice
  return (
    <div className="flex justify-center" data-aos="fade-down">
      <div className="card w-96 glass bg-white">
        <figure>
          <img
          className="h-[200px] w-full"
            src={img}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event}</h2>
          <p>
            {
                description.length>100 ? <>
                    {
                        description.slice(1,100)
                    }
                </>: description
            }
            </p>
            <p className="text-xs text-primary font-bold">price : 
            ${price}</p>
          <div className="card-actions">
            <Link to={`service/${id}`}><button className="btn btn-primary">Show Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survice;
