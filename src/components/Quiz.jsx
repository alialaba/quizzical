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
    
    />
   ))

    //   console.log(renderedAnswers);
    return(
        <div>
            <h3>{decode(props.question)}</h3>
           <div>
            {showAnswerOptions}
           </div>
           
        </div>
    );
}