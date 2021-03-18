import React from "react";
import Button from "../../components/atoms/Button/";
import Navbar from "../../components/molecules/Navbar/";
import { ReactComponent as LandingImage } from "../../assets/Landing-image.svg";

const Landing = ({ history }) => {
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <>
      <Navbar />
      <div className="fixed flex top-20 inset-x-0 bottom-0 bg-primary justify-center items-center gap-x-28">
        <div>
          <h1 className="text-6xl font-bold w-3/6 inline text-primary-lightest">
            Welcome to <br /> Master Challenges!
          </h1>
          <p className="mb-20 text-lg  mt-6 text-primary-lightest">
            A platform to improve your CSS Skills
          </p>
          <Button color="secondary" onClick={handleRedirect}>
            See challenges
          </Button>
        </div>
        <span className="mt-20 h-full flex items-center">
          <LandingImage alt="Landing" className="h-4/5" />
        </span>
      </div>
    </>
  );
};

export default Landing;
