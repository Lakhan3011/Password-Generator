import React from "react";

function Checkbox({ onChange, title, state }) {
  return (
    <div>
      <input type="checkbox" checked={state} onChange={onChange} />
      <label>{title}</label>
    </div>
  );
}

export default Checkbox;
