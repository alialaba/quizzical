import React , {useState}from "react";
import { decode } from "html-entities";
import Answer from "./Answer";
export default function Question({answers, question,}){

    // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const renderedAnswers = answers.map((answer, index) => (
        <Answer 
        key={answer} 
        answer={answer} 
        // isSelected={index === selectedAnswerIndex}
        // onSelect={()=> handleAnswerSelect(index)} 
        // isCorrect={index === correctAnswerIndex}
        />
       
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