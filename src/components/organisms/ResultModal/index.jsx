import AcceptedCard from "../../molecules/AcceptedCard";
import RejectedCard from "../../molecules/RejectedCard";
import React from "react";

const ResultModal = ({ isChallengePassed, challengeID, ...props }) => {
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-50 flex justify-center items-center z-50">
      {isChallengePassed ? (
        <AcceptedCard pid={challengeID} />
      ) : (
        <RejectedCard />
      )}
    </div>
  );
};

export default ResultModal;

ResultModal.defaultProps = {
  isChallengePassed: false,
};
