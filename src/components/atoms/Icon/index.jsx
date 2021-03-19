import React from "react";
import svgs from "./icons";

const Icon = ({ svg, classes, title }) => {
  const svgRender = svgs[svg] || svgs.default;
  return (
    <svg
      className={classes}
      viewBox={svgRender.viewBox}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

export default Icon;
