import React from "react";

function Input({ label, value, setValue }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}

export default Input;
