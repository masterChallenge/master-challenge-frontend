import Button from "../../atoms/Button/";
import DifficultyLabel from "../../atoms/DifficultyLabel/";
import Icon from "../../atoms/Icon/";
import Image from "../../atoms/Image/";
import React, {useState} from "react";
import { useHistory } from "react-router-dom"

const ChallengeCard = ({ name, challengeId, difficulty, image, attempts, estatus }) => {
  const [challenge] = useState(challengeId)
  let history = useHistory()
  
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push(`/challenge/${challenge}`);
  };

  return (
    <div
      className={`h-36 w-96 flex px-4 py-7 rounded-lg ${
        estatus === "completed" ? "bg-primary-light" : "bg-secondary-lightest"
      } `}
    >
      <div className="mr-6">
        <Image url={image} />
      </div>
      <div>
        <div className="flex items-center mb-2.5">
          <h2
            className={`font-bold text-lg mr-2 ${
              estatus !== "completed" && "text-primary-lightest"
            }`}
          >
            {name}
          </h2>
          {estatus === "completed" && <Icon />}
        </div>
        <DifficultyLabel difficulty={difficulty} className="w-11">
          {difficulty}
        </DifficultyLabel>
        <div className="flex mt-2">
          <span
            className={`mr-9 text-lg ${
              estatus !== "completed" && "text-primary-lightest"
            } `}
          >
            Attempts: {attempts}{" "}
          </span>
          <Button color="secondary-light" onClick={handleRedirect}>
            {estatus === "completed" ? "Retry" : "Go"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
