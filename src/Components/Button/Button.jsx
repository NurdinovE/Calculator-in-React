import React from 'react';

import "./Button.css"



const Button = ({symbol, index, color, handleClick}) => {
    return (
        <div key={index}
             onClick={() => handleClick(symbol)}
             className="button-wrapper"
             style={{background: color}}
        >
            {symbol}
        </div>
    );
};

export default Button;