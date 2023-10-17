import React, { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { AuthContext } from "../Contexts/AuthContext";
import setItemInLocale from "../utilities/Utilities";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { id } = useParams();
  const data = useOutletContext();
  const singleData = data.find((item) => item.id == id);
  const { event, description, img } = singleData;
  const { user } = useContext(AuthContext);

  function handleDonateOnclick(id, uid) {
    console.log(id, uid);
    if (setItemInLocale(id, uid)) {
      Swal.fire({
        title: "success",
        text: "Thanks for hire us",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "error",
        text: "You already hire us for this event",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl flex-col w-full lg:w-[50%] mx-auto mt-8">
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={() => handleDonateOnclick(id, user.uid)}
            className="btn btn-primary"
          >
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
