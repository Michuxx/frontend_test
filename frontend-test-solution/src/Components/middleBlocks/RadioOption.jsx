import React from "react";

export default function RadioOption({ id, label, isSelected, setSelected }) {
  return (
    <div className="radioButtons-col">
      <label className="custom-radio-btn">
        <input
          type="radio"
          name="opt"
          id={id}
          checked={isSelected}
          onChange={() => setSelected(id)}
        />
        <span className="checkmark"></span>
      </label>
      <label htmlFor={id} className={isSelected ? "bold" : ""}>
        {label}
      </label>
    </div>
  );
}
