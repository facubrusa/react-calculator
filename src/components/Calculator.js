import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import ClearButton from './ClearButton';
import * as math from "mathjs";

const Calculator = () => {
    const [input, saveInput] = useState('');

    const addToInput = val => {
        if(val === 'X') val = '*';
        saveInput(input + val);
    };

    const handleEqual = () => {
        let result = math.evaluate(input);
        saveInput(result);
    };

    return ( 
        <div className="calc-wrapper">
          <Input input={input} />
          <div className="row">
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <Button handleClick={() => handleEqual()}>=</Button>
            <Button handleClick={addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => saveInput('')}>
              Clear
            </ClearButton>
          </div>
        </div>
    );
}
 
export default Calculator;