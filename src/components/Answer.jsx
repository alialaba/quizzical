import React from "react";
import { decode } from "html-entities";

export default function Answer({answer, isSelected, onSelect, isCorrect}){
  
    return(
        <div className={`radio__button ${isSelected ? "selected" : "" } ${
          isCorrect ? "correct" : ""} ` } >
      <button className={`answer__button ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      {decode(answer)}
      </button>
    </div>
    );
}