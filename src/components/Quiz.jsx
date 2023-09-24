import React , {useState}from "react";
import { decode } from "html-entities";

import Button from "./Button"

export default function Question(props){
   const showAnswerOptions = props.answers.map((item)=>(
    <Button
    key={item.id}
    item={item}
    answer={item.value}
    isHeld={item.isHeld}
    questionId={props.questionId}
    heldAnswer={props.heldAnswer}
    
    />
   ))

    //   console.log(renderedAnswers);
    return(
        <div>
        <div className="quiz">
            <h4 className="quiz__question">{decode(props.question)}</h4>
           <div className="quiz__options">
            {showAnswerOptions}
           </div>
           {/* <hr className="quiz__divider"/> */}
        </div>
        </div>
    );
}