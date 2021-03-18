import React from "react";

const Button = ({ children, color, onClick }) => {
  return (
    <button
      type="button"
      className={`flex rounded-2xl h-8 text-light shadow font-bold text-xs py-2 px-3.5 items-center bg-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
