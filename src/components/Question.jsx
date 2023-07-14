import React from "react";
import Option from "./Option";

export default function Question(){
    return(
        
        <div className="card__question">
        <h3 className="card__text">How would one say goodbye in Spanish?</h3>
        <div>
            <Option/>
            <Option/>
            <Option/>
            <Option/>
        </div>
        </div>
      
 
    );
}