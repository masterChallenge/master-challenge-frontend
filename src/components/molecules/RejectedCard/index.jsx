import React, { useContext } from "react";

import Button from "../../atoms/Button/";
import { ReactComponent as Rejected } from "../../../assets/KeepTrying.svg";
import ModalContext from "../../../context/ModalContext";

const RejectedCard = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-warning flex flex-col items-center text-center rounded-3xl px-20 py-6 shadow-lg text-secondary-darker">
      <Rejected />
      <span className="mt-4 mb-10">
        <h3 className="text-2xl font-bold">Keep trying!</h3>
        <p>Practice makes the master</p>
      </span>
      <Button color="secondary-dark" onClick={handleClick}>
        Back to Challenge
      </Button>
      <a href="/" className="mt-4 text-sm font-bold">
        Return to dashboard
      </a>
    </div>
  );
};

export default RejectedCard;
