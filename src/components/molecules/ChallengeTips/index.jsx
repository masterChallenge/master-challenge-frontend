import Button from "../../atoms/Button/";
import { useState } from "react";

const ChallengeTips = ({ hints }) => {
  const [currentHint, setCurrentHint] = useState(null);

  const handleClick = () => {
    setCurrentHint(hints[Math.floor(Math.random() * hints.length)]);
  };
  return (
    <div className="bg-secondary-dark grid grid-rows-3 w-full text-light p-5 float-right">
      <h1 className="font-bold text-2xl pb-2">Hints</h1>
      <div>
        {currentHint ? currentHint.description : "Stucked? Try getting a hint!"}
      </div>
      <div className="flex justify-between items-center">
        {currentHint ? (
          <a href={currentHint.url} className="font-bold">
            Learn more...
          </a>
        ) : (
          <span></span>
        )}

        <span onClick={handleClick}>
          <Button children="Show hint" color="warning" />
        </span>
      </div>
    </div>
  );
};

export default ChallengeTips;

ChallengeTips.defaultProps = {
  hints: [
    {
      id: 0,
      description:
        "In this challenge you need to know about flexbox and justify-content",
      url: "https://developer.mozilla.org/es/docs/Web/CSS/justify-content",
    },
    {
      id: 1,
      description: "Want a higher level? Go to the Web Development School!",
      url: "https://platzi.com/web/",
    },
    {
      id: 2,
      description:
        "Use background-color to fill the container, you can use RGB, HEX, HSL or the color name",
      url: "https://www.w3schools.com/cssref/pr_background-color.asp",
    },
  ],
};
