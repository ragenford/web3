import React from "react";

const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    const parseDelta = parseInt(e.target.dataset.delta);
    changeCount(parseDelta);
  };

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  );
};

export default Button;
