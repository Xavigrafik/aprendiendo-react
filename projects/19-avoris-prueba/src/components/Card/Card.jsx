import React from 'react';
import "./Card.scss"
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import { useEffect, useRef  } from 'react';



const Card = ({ item }) => {

    if (!item) {
        return null;
    }

    const popoverButtonRef = useRef(null);
    const popoverContentRef = useRef(null);

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
    
    useEffect(() => {
        if (!popoverButtonRef.current || !popoverContentRef.current) {
            return;
        }

        const PopoverClass = window.bootstrap && window.bootstrap.Popover; 
        
        if (!PopoverClass) {
             console.error("Bootstrap Popover no está disponible. Asegura que el script de Bootstrap JS se carga.");
             return;
        }
        
        const contentHTML = popoverContentRef.current.innerHTML;

        const popoverInstance = new PopoverClass(popoverButtonRef.current, {
            container: 'body',
            html: true, 
            placement: 'bottom',
            content: contentHTML, 
            // trigger: 'click', 
        });

        return () => {
            popoverInstance.dispose();
        };
    }, [item, prices]); 


    return (
        <div className="card">
            <div className="card__tag">{item.tag }</div>
            <img className='card__image' src={item.image ? item.image : "https://place.dog/300/200 "} alt={`Imagen de ${item.country}`} />
            <div className='card__body'>
                <p className='card__info'>{item.country}, {item.continent} <span>{item.days} días</span></p>
                <h4 className='card__title'>{item.title}</h4>
            </div>
            <div className='card__footer'>
                <div className='card__priceBlock'>
                    <p className='card__price'>Desde: <span>{item.price} €</span></p>

                    <div ref={popoverContentRef} className='popover popover-template d-none'>
                        <div className='popover__header'>Desglose de precios
                            {/* <span>X</span> */}
                        </div>
                        <div className='popover__body'>
                            <div className='popover__info'>
                                {item.country}, {item.continent} <span>{item.days} días</span>
                            </div>
                            <div className='data-row'>Precio antes de impuestos <span>{prices.base} €</span></div>
                            <div className='data-row'>Impuestos <span>{prices.tax} €</span></div>
                        </div>
                        
                        <div className='popover__footer'>
                            Precio final <span>{prices.final} €</span>
                        </div>
                        
                    </div>

                    <button 
                        ref={popoverButtonRef}
                        className="card__details" 
                        data-bs-toggle="popover" 
                        data-bs-placement="bottom" 
                        data-bs-html="true" 
                        data-bs-content="" 
                    >
                        Ver desglose
                        <Icon className="deailsIcon"  name="chevronleft" />
                    </button>
                </div>
                <div className='card__cta'>
                    <Button variant="secondary" size="sm">Reservar</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;