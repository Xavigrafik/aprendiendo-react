import React from 'react'
import LOGO from '../../assets/Waveless-Color.svg';
import "./Footer.scss"
const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='Footer'>
            <div className="Footer__logo">
                <img src={LOGO} alt="Logo Waveless" />
            </div>
            <div className="Footer__bottomBar">
                @{currentYear} Waveless - Todos los derechos reservados.
            </div>
        </div>
    )
}

export default Footer