import React from "react";
import './input.css';


function Input(props){
    return(
        <div> 
        <div className="results" >{props.results}</div>
        <div className="text">{props.text}</div>
        </div>
    )

}

export default Input;