import { useOutletContext } from "react-router-dom";
import { getItemsFromLocale } from "../utilities/Utilities";
import { useContext, useState } from "react";
import BookedCard from "../Components/BookedCard";
import { AuthContext } from "../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const Booked = () => {
  const { user } = useContext(AuthContext);
  const booked = getItemsFromLocale(user.uid);
  const data = useOutletContext();

  return (
    <>
    <Helmet>
        <title>Booked</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        data-aos="zoom-in-down"
        className={
          booked
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex h-[70vh] items-center justify-center text-3xl"
        }
      >
        {booked ? (
          data
            .filter((item) => booked.includes(item.id))
            .map((item) => <BookedCard key={item.id} item={item}></BookedCard>)
        ) : (
          <div>
            <div className="flex items-center justify-center mt-10 bg-white">
              <div className="flex flex-col">
                <div className="flex flex-col items-center">

                  <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                  You haven't hire us yet
                  </div>

                  <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                    Please hire us for your event
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Booked;
