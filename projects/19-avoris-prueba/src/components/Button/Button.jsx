import React from 'react';
import './Button.scss'; 

// type Variant = "primary" | "secondary";
// type Size = "sm" | "base" | "lg";
// type State = "default" | "hover" | "disabled"; 

// El disabled se maneja con el atributo 'disabled'

const Button = ({ 
    children, 
    variant = 'primary', // Default a 'primary'
    size = 'base',       // Default a 'base'
    onDark = false,      // Default a false
    disabled = false,    // Maneja el estado 'disabled'
    onClick, 
    ...rest
}) => {
    
    let className = 'btn'; 
    className += ` btn--${variant}`;
    className += ` btn--${size}`;

    if (onDark) {
        className += ` btn--onDark`; 
    }

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;