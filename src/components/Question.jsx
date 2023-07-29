import React from "react";
import { decode } from "html-entities";
import Answer from "./Answer";
export default function Question({answers, question}){

    const renderedAnswers = answers.map((answer) => (
        <Answer key={answer} answer={answer} />
      ));

    return(
        <div>
            <p>{decode(question)}</p>
           <div style={{display:"flex"}}>
           {renderedAnswers}
           </div>
        </div>
    );
}