import "./App.css"
import Input from "./input";
import React, { useState } from "react";
import * as math from 'mathjs';

function App() {

  const [text, SetText] = useState('');
  const [results, SetResults] = useState('');

  const add = (event) => {
    SetText((text) => (([...text, event]))

    );

  }

  const clear = (event) => {
    SetText((text) => (([""]))

    );
    SetResults('');

  }

  const calResult = () => {
    const input = text.join('');
    console.log('input',input);
    SetResults(math.evaluate(input))
  }

  const [hover, SetHover] = useState(false);

  function handleChange() {
    SetHover(true);
  }
  function handleMouseOut() {
    SetHover(false);
  }


  return (
    <div onMouseOut={handleMouseOut} onMouseOver={handleChange} style={{ backgroundColor: hover ? "red" : "blue" }} className="app place">
      <h1 >CALCULATOR</h1>
      <Input text={text} results={results} />
      <div className="stline">
        <button onClick={() => add(9)}>9</button>
        <button onClick={() => add(8)} >8</button>
        <button onClick={() => add(7)}>7</button>
        <button onClick={() => add("/")}>/</button>
      </div>
      <div className="stline">
        <button onClick={() => add(6)}>6</button>
        <button onClick={() => add(5)}>5</button>
        <button onClick={() => add(4)}>4</button>
        <button onClick={() => add("*")}>*</button>
      </div>

      <div className="stline">
        <button onClick={() => add(1)}>1</button>
        <button onClick={() => add(2)}>2</button>
        <button onClick={() => add(3)}>3</button>
        <button onClick={() => add("+")}>+</button>
      </div>
      <div className="stline">
        <button onClick={() => add(0)}>0</button>
        <button onClick={() => add(".")}>.</button>
        <button onClick={() => calResult()}>=</button>
        <button onClick={() => add("-")}>-</button>
      </div>
      <div>
        <button id="clear" onClick={() => clear("-")} >clear </button></div>

    </div>
  );
}

export default App;
