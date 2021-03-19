import React from "react";

const Button = ({ children, color, onClick, type }) => {
  let buttonStyle;

  switch (type) {
    case "primary":
      buttonStyle = `flex rounded-xl font-normal text-light text-lg shadow-xl font-bold text-xs py-4 px-6 items-center bg-${color}`;
      break;
    case "secondary":
      buttonStyle = `flex rounded-2xl font-normal text-light shadow-xl font-bold text-xs py-2 px-9 items-center bg-${color}`;
      break;
    case "tertiary":
      buttonStyle = `flex rounded-2xl font-normal text-light shadow-md font-bold text-xs py-2 px-6 items-center bg-${color}`;
      break;
    default:
      break;
  }
  return (
    <button type="button" className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
