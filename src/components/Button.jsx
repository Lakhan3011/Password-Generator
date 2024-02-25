import React from "react";

function Button({ text, customClass, onClick }) {
  return (
    <div>
      <button className={customClass} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
