import React from "react";
function Input({ label, value, setValue, type = "text", required = false }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => setValue(e.target.value)} required={required} />
    </div>
  );
}
export default Input;