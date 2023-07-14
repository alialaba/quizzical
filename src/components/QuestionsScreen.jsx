import React from "react";
import Button from "./Button";
import Question from "./Question";


export default function QuestionsScreen(){
    return(
        <div className="card">
        <div className="card__questions">
        <Question/>
        </div>
        <Button text="Check answers"/>
    </div>
    );
}