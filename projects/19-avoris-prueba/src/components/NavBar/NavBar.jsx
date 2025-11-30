import React from 'react'
import LOGO from '../../assets/Waveless-Color.svg';
import "./NavBar.scss"
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

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
                <Button className='NavBar__button' variant="primary" size="base">Reserva</Button>
                <div>
                    
                {/* <Button className='NavBar__button' variant="primary" size="sm">Reserva sm</Button>
                <Button className='NavBar__button' variant="primary" size="base">Reserva base</Button>
                <Button className='NavBar__button' variant="primary" size="lg">Reserva lg</Button>
                <Button className='NavBar__button' variant="primary" size="sm" disabled >Reserva lg</Button>
                    <hr />
                <Button className='NavBar__button' variant="primary" size="sm" onDark={true}>Reserva onDark</Button>
                <Button className='NavBar__button' variant="primary" size="base" onDark={true}>Reserva</Button>
                <Button className='NavBar__button' variant="primary" size="lg" onDark={true}>Reserva</Button>
                <Button className='NavBar__button' variant="primary" size="sm" onDark={true} disabled>Reserva onDark disabled</Button>
                <hr />
                <hr />
                <Button className='NavBar__button' variant="secondary" size="sm">Detalles</Button>
                <Button className='NavBar__button' variant="secondary" size="base">Detalles</Button>
                <Button className='NavBar__button' variant="secondary" size="lg">Detalles</Button>
                <Button className='NavBar__button' variant="secondary" size="sm" disabled>disabled</Button> */}

            </div>

            </div>

            <div className="NavBar__hamburger">
                <Icon name="hamburger"/>
            </div>
        </div>
    )
}

export default NavBar