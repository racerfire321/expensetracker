import React from 'react';
import './Button.css';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    const buttonStyle = {
        '--bg-color': bg,
        '--button-padding': bPad,
        '--border-radius': bRad,
        '--button-color': color,
    };

    return (
        <button
            className="button"
            style={buttonStyle}
            onClick={onClick}
        >
            {icon}
            {name}
        </button>
    );
}

export default Button;
