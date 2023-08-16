import React, { useState } from "react";
import Button from "./Button";
import Question from "./Question";
 
export default function QuestionsScreen({quizData}) {

 let showQuestions = quizData.map((quiz, index)=>{
 return(
  <span  className="card__question">
  <Question
   key={quiz.id}
   questionId={quiz.id}
   question={quiz.question}
   answers={quiz.answers}
   quizData={quizData}
  //  setQuizData={quiz.setQuizData}
  //  heldAnswer={quiz.heldAnswer}
  //  score={quiz.score}
  //  setScore={quiz.setScore}
   />
</span>
 );
      
 })

 
  return (
    <div className="card">
      <div className="card__questions">
      {showQuestions}
      </div>
      <Button text="check Answer"   /> 
     
    </div>
  );
}
