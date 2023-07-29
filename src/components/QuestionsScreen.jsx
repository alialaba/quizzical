import React, { useState } from "react";
import Button from "./Button";
import Question from "./Question";
 

export default function QuestionsScreen({quizData}) {
 let showQuestions = quizData.map((quiz)=>{
 return(
  <span key={quiz.id} className="card__question">
  <Question
   key={quiz.id}
   questionId={quiz.id}
   question={quiz.question}
   answers={quiz.answers}
   quizData={quizData}
   />
</span>
 );
      
 })
 
  return (
    <div className="card">
      <div className="card__questions">
      {showQuestions}
      </div>

      <Button text="Check answers" />
    </div>
  );
}
