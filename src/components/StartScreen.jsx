import React from "react";

export default function StartScreen(props){
    return(
        <div className="card card__extra">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className="card__btn " onClick={()=> props.getStarted()}>Start quiz</button>
        </div>
    );
}