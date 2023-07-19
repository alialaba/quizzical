import React from "react";
import Button from "./Button";
// import Question from "./Question";
import { decode } from 'html-entities';
// const entities = new AllHtmlEntities();


export default function QuestionsScreen({quizs}){
    return(
        <div className="card">
        <div className="card__questions">
            {quizs.map((quiz, index)=>(
                <div key={index}>
                    <p>{decode(quiz?.question)}</p>
                    {/* {quiz?.question && <p>{encode(quiz.question)}</p> } */}

                 </div>
            ))}
        
        </div>
        
        <Button text="Check answers"/>
    </div>
    );
}