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
    className = '',
    ...rest
}) => {
    
   const classList = [
        'btn', 
        `btn--${variant}`,
        `btn--${size}`,
        onDark && `btn--onDark`,
        className 
    ].filter(Boolean).join(' ');

    return (
        <button
            className={classList}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;