import { Link } from "react-router-dom";
import React from "react";
import { history } from "react-router-dom";

import { ReactComponent as Accepted } from "../../../assets/Completed.svg";
import Button from "../../atoms/Button/";

const AcceptedCard = ({ pid, ...props }) => {
  const handleRedirect = () => {
    let nextChallenge = `/challenge/${parseInt(pid) + 1}`;
    history.push(nextChallenge);
  };
  return (
    <div className="bg-primary flex flex-col items-center text-center rounded-3xl px-20 py-6 shadow-lg text-secondary-darker">
      <Accepted />
      <span className="mt-4 mb-10">
        <h3 className="text-2xl font-bold">Well Done!</h3>
        <p>You're getting better at css</p>
      </span>
      <Button color="secondary-dark" type="primary" onClick={handleRedirect}>
        Next Challenge
      </Button>
      <Link to="/home" className="mt-4 text-sm font-bold">
        Return to dashboard
      </Link>
    </div>
  );
};

export default AcceptedCard;
