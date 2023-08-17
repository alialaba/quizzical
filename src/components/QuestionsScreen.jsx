import React, { useState } from "react";
import Button from "./Button";
import Question from "./Question";
 
export default function QuestionsScreen(props) {

 let showQuestions = props.quizData.map((quiz)=>(
  // console.log(quiz.id)
  // <span  className="card__question">
  <Question
   key={quiz.id}
   questionId={quiz.id}
   question={quiz.question}
   answers={quiz.answers}
   quizData={props.quizData}
   setQuizData={props.setQuizData}
  
  />
// </span>
      
 ))

 
  return (
    <div className="card">
      <div className="card__questions">
      <div className="card__question">
      {showQuestions}
      {/* </hr> */}
      </div>
      </div>
      <Button text="check Answer" className="check-answer-btn"  /> 
     
    </div>
  );
}
