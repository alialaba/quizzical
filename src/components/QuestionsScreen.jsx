import React from "react";
import Button from "./Button";

export default function QuestionsScreen(){
    return(
        <div className="card">
        <div className="card__questions">
        <h3 className="card__question">How would one say goodbye in Spanish?</h3>
        {/* <p className="card__text">some decription here</p> */}
        <Button text="Check answers"/>
        </div>
    </div>
    );
}