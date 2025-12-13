import React, { useState } from "react";
import "./Radio.css";

const Radio = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    onSelect(index); // передаём индекс выбранного ответа наверх
  };

  return (
    <div className="custom-radio-group">
      {options.map((option, index) => (
        <label className="custom-radio-container" key={index}>
          <input
            type="radio"
            name="custom-radio"
            checked={selected === index}
            onChange={() => handleClick(index)}
          />
          <span className="custom-radio-checkmark" />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
