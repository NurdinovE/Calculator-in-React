import React, {useState} from 'react'
import Input from "./Components/Input/Input.jsx"
import Button from "./Components/Button/Button.jsx";

import * as math from "mathjs";

import './App.css'
import {number} from "mathjs";

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");


    const numbers = [
        '7', '8', '9',
        '4', '5', '6',
        '1', '2', '3',
        '0','.']
    const symbols = ['+', '-', '/', '*']

    const addToText = (val) => {
        setText((text) => [...text, val + ""]);
    };

    const calculateResult = () => {
        const input = text.join(""); // Remove commas
        const res = math.evaluate(input)

        if (res === 0 || res === Infinity){
            setResult('ОШИБКА')
        } else{
            setResult(res);
        }
    };

    const resetInput = () => {
        setText("");
        setResult("");
    };

    const backspaceInput = () => {
        setText(text.slice(0, -1))
    }


    return (
        <div className="App">
            <div className="calcWrapper">
                <div className="calcPanel">
                    <Input text={text} result={result}/>
                </div>
                <div className="calcKeypad">

                    <div className="calcSymbols">
                        <div className="symbol__row">
                            <Button symbol="C" color="red" handleClick={resetInput}/>
                            <Button symbol={'DEL'} color="red" handleClick={backspaceInput}/>
                            {symbols.map((item, index) => {
                                return (
                                    <Button symbol={item} color="#ff671f" key={index} handleClick={addToText}/>
                                )
                            })}
                        </div>
                        <div className="number__row">
                            {numbers.map((item, index) => {
                                return (
                                    <Button symbol={item} key={index} handleClick={addToText}/>
                                )
                            })}
                            <Button symbol="=" handleClick={calculateResult}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
