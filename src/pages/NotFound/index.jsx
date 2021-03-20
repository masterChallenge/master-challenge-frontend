import React from "react";
import Navbar from "../../components/molecules/Navbar/";
import { ReactComponent as Not } from "../../assets/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary fixed w-screen h-screen">
        <div className="w-6/12 m-auto">
          <Not alt="not found" />
          <div className="mt-2">
            <h2 className="text-center text-2xl	font-bold	">
              Finding the page you were looking for was a
            </h2>
            <h1 className="text-center text-5xl	font-bold	mt-2">
              too difficult challenge
            </h1>
            <Link to="/">
              <p className="text-center mt-6 cursor-pointer text-light">
                Return to home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
