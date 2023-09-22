import React from "react";

export default function StartScreen(props){
    return(
        <div className="">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={()=> props.getStarted()}>Start quiz</button>
        </div>
    );
}