import React , {useState}from "react";
import { decode } from "html-entities";
import Button from "./Button";

export default function Question(props){

    const renderedAnswers = props.answers.map((item) => (
        <Button 
        className="btn"
        key={item.id}
        text={decode(item.answer)}
        item={item}
        isHeld={item.isHeld}

        
        />
       
      ));

    //   console.log(renderedAnswers);
    return(
        <div>
            <p>{decode(props.question)}</p>
           <div style={{display:"flex"}}>
           {renderedAnswers}
           </div>
        </div>
    );
}