import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import DestinyCards from '../../data/destinyCards.json';

const CardList = ({toggleFilter, filterIsOpen}) => {

    const destinyCards = DestinyCards;
    const isDataLoaded = Array.isArray(destinyCards) && destinyCards.length > 0;
    
    const groupedCards = isDataLoaded ? destinyCards.reduce((acc, item) => {
        if (item && item.continent) {
            const continent = item.continent;
            if (!acc[continent]) {
                acc[continent] = [];
            }
            acc[continent].push(item);
        }
        return acc;
    }, {}) : {};


    return (
        <div className="CardList"> 
            <div className='CardList__titleBlock'>
                <h3>Vive tus propias aventuras</h3>
                <p>Para los que les gusta explorar y conocer mundo sin complejos</p>
            </div>

            <Button
                className='mb-3 mt-3 filter-toggle-button'
                variant='secondary'
                size="sm"
                type="button"
                onClick={toggleFilter}
            >
                <Icon name="filter"></Icon>
                {filterIsOpen ? 'Ocultar filtros' : 'Ver filtros'} 
            </Button>
            
            {isDataLoaded && Object.keys(groupedCards).length > 0 ? (
                Object.entries(groupedCards).map(([continent, cards]) => (
                    <div key={continent} className='CardList__group'>
                        <h2 className='CardList__group-title'>{continent}</h2>
                        
                        <div className='CardList__grid'>
                            {cards
                                .filter(item => item != null)
                                .map((item) => (
                                    <Card
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No se encontraron destinos disponibles en el JSON.</p>
            )}
        </div>
    )
}

export default CardList;