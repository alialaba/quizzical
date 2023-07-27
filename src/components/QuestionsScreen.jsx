import React, { useState } from "react";
import Button from "./Button";

import { decode } from "html-entities";

export default function QuestionsScreen({ quizs, shuffledAnswers }) {
  // State to hold the selected answer index for each question
  // const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleCheckAnswer = (questionIndex, answerIndex, e) => {
    // setSelectedAnswers((prevSelectedAnswers)=>{
    //     // Create a new array with the selected answer index updated for the specific question
    //     let newSelectedAnswers = [...prevSelectedAnswers];
    //     newSelectedAnswers[questionIndex] = answerIndex;
    //     return newSelectedAnswers;
    // });
    console.log(e.target)
  };

  return (
    <div className="card">
      <div className="card__questions">
        {quizs.map((quiz, questionIndex) => (
          <div key={questionIndex} className="card__question">
            <p>{decode(quiz?.question)}</p>
            {shuffledAnswers([
              ...quiz.incorrect_answers,
              quiz.correct_answer,
            ]).map(function answerOptions(answer, answerIndex) {
              return (
                <div className="radio__button" key={answerIndex}>
                  <input 
                  type="radio" 
                  id={`a${questionIndex}`} 
                  name={`option${questionIndex}`} 
                //   checked={selectedAnswers[questionIndex] === answerIndex}
                //   onChange={()=>handleCheckAnswer(questionIndex, answerIndex)}  
                  />
                  <label htmlFor={`a${questionIndex}`}>{decode(answer)}</label>
                </div>
                // <button onClick={handleCheckAnswer} key={answerIndex}>{decode(answer)} </button>
              );
            })}
          </div>
        ))}
      </div>

      <Button text="Check answers" />
    </div>
  );
}
