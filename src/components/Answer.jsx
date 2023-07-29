import React from "react";
import { decode } from "html-entities";

export default function Answer({answer}){
    return(
        <div className="radio__button" >
      <input type="radio" id={`a${answer}`} name="option" />
      <label htmlFor={`a${answer}`} style={{fontSize:"14px"}}>{decode(answer)}</label>
    </div>
    );
}