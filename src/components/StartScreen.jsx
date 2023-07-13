import React from "react";
import Button from "./Button";

export default function StartScreen({isQuizOn}){
    return(
        <div className="card">
            <div className="blob-up"></div>
            <div className="card__content">
            <h2 className="card__title">Quizzical</h2>
            <p className="card__text">some decription here</p>
            <Button text="Start Quiz" onClick={isQuizOn}/>
            </div>
        </div>
    );
}