import React, { useState } from "react";
import { questions } from "../../../src/data/questions";
import Radio from "../UI/RadioBtn/Radio";
import Button from "../UI/Button-Next/Button";
import "./TakeTest.css";
export default function TakeTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setScore(score + questions[current].scores[selectedAnswer]);
      setSelectedAnswer(null);
      setCurrent(current + 1);
    }
  };

  if (current >= questions.length) {
    return <h2>Результат: {score} / {questions.length}</h2>;
  }

  return (
    <div className="task-block">
      <h3>{current + 1}. {questions[current].text}</h3>
      <Radio
        options={questions[current].answers}
        onSelect={handleSelect}
      />
      <Button onClick={handleNext} />
    </div>
  );
}
