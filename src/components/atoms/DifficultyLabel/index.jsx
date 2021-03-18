import React from "react";

const DifficultyLabel = ({ children, difficulty }) => {
  const color = () => {
    if (difficulty === "easy") {
      const colorLabel = "primary";
      return colorLabel;
    } else if (difficulty === "medium") {
      const colorLabel = "warning";
      return colorLabel;
    } else {
      const colorLabel = "danger";
      return colorLabel;
    }
  };

  return (
    <div
      className={`flex p-2 h-8 bg-${color()} text-light rounded-lg text-xs items-center w-max font-light`}
    >
      {children}
    </div>
  );
};

export default DifficultyLabel;
