import React from 'react';
import { Icons } from '../../assets/icons/index.js'; 

const Icon = ({ name, className="", ...rest }) => {
    // 1. SvgComponent ahora es la URL string
    const SvgComponent = Icons[name]; 

    if (!SvgComponent) {
        console.warn(`Icono no encontrado: ${name}`);
        return null;
    }
    
    // 2. Usar <img>, la única forma que tu bundler soporta sin configuración extra
    return <img src={SvgComponent} className={className} alt={`${name} icon`} {...rest} />;
};

export default Icon;