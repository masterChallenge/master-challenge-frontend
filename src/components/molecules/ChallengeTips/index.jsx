import { useState } from "react";
import Icon from "../../atoms/Icon";

const ChallengeTips = ({ hints }) => {
  const [currentHint, setCurrentHint] = useState(null);

  const handleClick = () => {
    setCurrentHint(hints[Math.floor(Math.random() * hints.length)]);
  };
  return (
    <div className="bg-secondary-dark grid grid-rows-3 w-full text-light p-5 float-right">
      <h1 className="font-bold text-2xl pb-2">Hints</h1>
      <div>
        {currentHint
          ? currentHint.description
          : "If you have problems, the bulb will show you the way. Click it"}
      </div>
      <div className="flex justify-between items-center">
        {/* Here I added rel attribute by security reasons:
        link for more information: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
        {currentHint ? (
          <a rel='noreferrer' href={currentHint.url} className="font-bold" target="_blank">
            Learn more...
          </a>
        ) : (
          <span></span>
        )}

        <span onClick={handleClick}>
          <Icon
            svg="hint"
            classes="h-12 w-8 cursor-pointer text-light hover:text-tip-bulb"
            title="Show Hint"
          />
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
