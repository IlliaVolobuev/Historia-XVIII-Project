import React, { useState } from "react";
import { questionsPart1 } from "../../../src/data/questions";
import Radio from "../UI/RadioBtn/Radio";
import Button from "../UI/Button-Next/Button";
import "./TakeTest.css";
import "../../index.css";

// Функция для перемешивания ответов (вызывается ВНЕ компонента)
const shuffleQuestions = (questions) => {
  return questions.map((question) => {
    // Создаём массив пар (ответ, балл)
    const answersWithScores = question.answers.map((text, idx) => ({
      text,
      score: question.scores[idx],
    }));

    // Перемешиваем по алгоритму Fisher-Yates
    for (let i = answersWithScores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answersWithScores[i], answersWithScores[j]] = [
        answersWithScores[j],
        answersWithScores[i],
      ];
    }

    return {
      ...question,
      shuffledAnswers: answersWithScores,
    };
  });
};

export default function TakeTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Перемешиваем вопросы один раз при инициализации состояния
  const [shuffledQuestions] = useState(() => shuffleQuestions(questionsPart1)); // Пустой массив зависимостей = вычисляется один раз

  const handleSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Добавляем балл выбранного ответа
      setScore((prev) => prev + shuffledQuestions[current].shuffledAnswers[selectedAnswer].score);

      const nextIndex = current + 1;
      if (nextIndex < shuffledQuestions.length) {
        setCurrent(nextIndex);
        setSelectedAnswer(null);
      } else {
        setCurrent(nextIndex); // для отображения результата
      }
    }
  };

  // Экран результата
  if (current >= shuffledQuestions.length) {
    const maxScore = questionsPart1.length;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="result-block">
        <h2>Twój wynik</h2>
        <p>{score} / {maxScore}</p>
        <p style={{ fontSize: "24px", color: "#6b7280" }}>
          {percentage}%
        </p>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="task-block">
      <h3>{current + 1}. {currentQuestion.text}</h3>
      <Radio
        options={currentQuestion.shuffledAnswers.map((a) => a.text)}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
      />
      <Button onClick={handleNext} />
    </div>
  );
}