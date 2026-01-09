import React from "react";
import "./Radio.css";

const Radio = ({ options, onSelect, selectedAnswer, name = "custom-radio" }) => {
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
            checked={selectedAnswer === index}
            onChange={() => onSelect(index)}
            aria-checked={selectedAnswer === index}
          />
          <span className="custom-radio-checkmark" aria-hidden="true" />
          <span className="custom-radio-text">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
