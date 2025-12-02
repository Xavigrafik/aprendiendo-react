import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';
import DestinyCards from '../../data/destinyCards.json';

const CardList = () => {

    const destinyCards = DestinyCards;
    console.log("Datos cargados:", destinyCards);
    const isDataLoaded = Array.isArray(destinyCards) && destinyCards.length > 0;
    return (
        <div className="">
            {/* <h3 className='cardList__title'>Ofertas Destacadas</h3> */}
            <div className='cardList'>
                {isDataLoaded ? (
                    destinyCards
                        .filter(item => item != null)
                        .map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                            />
                        ))
                ) : (
                    <p>No se encontraron destinos disponibles en el JSON.</p>
                )}
            </div>
        </div>
    )
}

export default CardList;