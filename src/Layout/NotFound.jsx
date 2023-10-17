import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
    <Helmet>
        <title>Not Found</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Navbar />
      <div>
        <div className="flex items-center justify-center mt-10 bg-white">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <div className="text-indigo-500 font-bold text-7xl">404</div>

              <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                This page does not exist
              </div>

              <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                The page you are looking for could not be found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
