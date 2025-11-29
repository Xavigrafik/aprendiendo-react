import React from 'react'
import "./Card.scss"
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

const Card = ({ item }) => {

    if (!item) {
        return null;
    }

    const calculatePrices = () => {
        const finalPrice = parseFloat(item.price) || 0;
        const taxAmount = parseFloat(item.tax) || 0;
        
        const basePrice = finalPrice - taxAmount;

        return {
            base: basePrice.toFixed(2),
            final: finalPrice.toFixed(2),
            tax: taxAmount.toFixed(2)
        };
    };

    const prices = calculatePrices();

    return (
        <div className="card">
            <img className='card__image' src={item.image ? item.image : "https://place.dog/300/200 "} alt={`Imagen de ${item.country}`} />
            <div className='card__body'>
                <p className='card__info'>{item.country}, {item.continent} <span>{item.days} días</span></p>
                <h4 className='card__title'>{item.title}</h4>
            </div>
            <div className='card__footer'>
                <div className='card__priceBlock'>
                    <p className='card__price'>Desde: <span>{item.price} €</span></p>
                    <p className='card__details'>
                        Ver desglose
                    </p>

                </div>
                <div className='card__cta'>
                    <Button variant="secondary" size="sm" onClick={() => console.log('Primary Large')}>
                        Reservar
                    </Button>
                </div>
            </div>
            
            <div className='popover'>
                <div className='popover__header'>Desglose de precios
                    <Icon name="close" className={'popover__close'} />
                </div>
                <div className='popover__body'>
                    <div className='popover__info'>
                        {item.country}, {item.continent} <span>{item.days} días</span>
                    </div>
                    
                    <div className='data-row'>Precio antes de impuestos <span>{prices.base} €</span></div>
                    <div className='data-row'>Impuestos <span>{prices.tax} €</span></div>
                </div>
                
                <div className='popover__footer'>
                    <div className='popover__price'>
                        <div>Precio final <span>{prices.final} €</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card