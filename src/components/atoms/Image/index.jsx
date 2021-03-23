import React from "react";

const Image = ({ url }) => {
  return (
    <div className="h-24 w-24 bg-cover">
      <img
        src={`${url}`}
        alt=""
        className="h-24 w-24 rounded-t-xl rounded-r-xl rounded-b-xl"
      />
    </div>
  );
};

export default Image;
