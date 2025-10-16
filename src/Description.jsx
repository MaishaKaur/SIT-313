import React from "react";

function Description({ label, value, setValue }) {
  return (
    <div>
      <label>{label}: </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}

export default Description;
