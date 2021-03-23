import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ReactComponent as Accepted } from "../../../assets/Completed.svg";
import Button from "../../atoms/Button/";
import ModalContext from "../../../context/ModalContext";

const AcceptedCard = ({ pid, ...props }) => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bg-primary flex flex-col items-center text-center rounded-3xl px-20 py-6 shadow-lg text-secondary-darker">
      <Accepted />
      <span className="mt-4 mb-10">
        <h3 className="text-2xl font-bold">Well Done!</h3>
        <p>You're getting better at css</p>
      </span>
      <a href={`/challenge/${parseInt(pid) + 1}`}>
        <Button color="secondary-dark" type="primary" onClick={handleClick}>
          Next Challenge
        </Button>
      </a>
      <Link to="/home" className="mt-4 text-sm font-bold" onClick={handleClick}>
        Return to dashboard
      </Link>
    </div>
  );
};

export default AcceptedCard;
