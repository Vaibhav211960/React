import React from "react";

export const Button = ({ handleColor, color }) => {
  return (
    <button
      className={`rounded-md py-1 px-3 bg-black text-white font-semibold`}
      onMouseEnter={() => handleColor(color)}
    >
      {color}
    </button>
  );
};
