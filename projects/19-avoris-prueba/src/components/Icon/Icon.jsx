import React from 'react';
import { Icons } from '../../assets/icons/index.js'; 

const Icon = ({ name, className="", ...rest }) => {
    const SvgComponent = Icons[name]; 
    if (!SvgComponent) {
        console.warn(`Icono no encontrado: ${name}`);
        return null;
    }
    return <img src={SvgComponent} className={className} alt={`${name} icon`} {...rest} />;
};

export default Icon;