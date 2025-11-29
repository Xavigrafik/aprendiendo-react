import React from 'react'
import LOGO from '../../assets/Waveless-Color.svg';
import "./NavBar.scss"
import Icon from '../Icon/Icon.jsx';

const NavBar = () => {
    return (
        <div className='NavBar container'>
            <div className="NavBar__logo">
                <img src={LOGO} alt="Logo de la compañía" />
            </div>
            <div className="NavBar__collapse">
                <ul className='NavBar__list'>
                    <li className='NavBar__item NavBar__item--active '>
                        <Icon name="mountain" className="NavBar__icon" />
                        Aventura
                    </li>
                    <li className='NavBar__item'><Icon name="globe" className="NavBar__icon" /> Destinos</li>
                    <li className='NavBar__item'><Icon name="house" className="NavBar__icon" /> Alojamiento</li>
                    <li className='NavBar__item'>Sobre nosotros</li>
                </ul>
                <button className='NavBar__button'>Reserva</button>
            </div>

            <div className="NavBar__hamburger">
                <Icon name="hamburger"/>
            </div>
        </div>
    )
}

export default NavBar