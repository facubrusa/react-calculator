import React from 'react';

const Button = ({handleClick, children}) => {

    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    };

    return ( 
        <div
            className={`button-wrapper ${
            isOperator(children) ? null : "operator"
            }`}
            onClick={() => handleClick(children)}
        >
            {children}
        </div>
    );
}
 
export default Button;