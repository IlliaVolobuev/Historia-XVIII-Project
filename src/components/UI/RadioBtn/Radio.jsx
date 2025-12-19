import React, { useState } from "react";
import "./Radio.css";

const Radio = ({ options, onSelect, name = "custom-radio" }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    onSelect(index);
  };

  return (
    <div className="custom-radio-group" role="radiogroup">
      {options.map((option, index) => (
        <label 
          className="custom-radio-container" 
          key={index}
          aria-label={option}
        >
          <input
            type="radio"
            name={name}
            checked={selected === index}
            onChange={() => handleClick(index)}
            aria-checked={selected === index}
          />
          <span className="custom-radio-checkmark" aria-hidden="true" />
          <span className="custom-radio-text">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;