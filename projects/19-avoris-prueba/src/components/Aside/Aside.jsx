import React from 'react';
import "./Aside.scss";
import Icon from '../Icon/Icon';
import { useEffect } from 'react';
import { Tooltip } from 'bootstrap';

const InfoIcon = ({ title }) => {
    return (
        <span 
            className="aside__info-icon"
            type="button"
            data-bs-toggle="tooltip" 
            data-bs-placement="top"
            data-bs-custom-class="aside__tooltip"
            data-bs-title={title}
        >
            ⓘ
        </span>
    );
};

const sections = [
    {
        title: "Aventura",
        icon: "mountain",
        idTarget: "collapseAventura", 
        isOpen: true, 
        content: (
            <>
                <div className="aside__item">
                    <input type="checkbox" id="quads" />
                    <label htmlFor="quads" className="aside__label">Quads</label>
                    <InfoIcon title="Información sobre Quads" />
                </div>
                <div className="aside__item aside__item--selected">
                    <input type="checkbox" id="parapente" />
                    <label htmlFor="parapente" className="aside__label">Parapente</label>
                    <InfoIcon title="Información sobre Parapente" />
                </div>
                <a href="#" className="aside__item aside__link">Ver 21 más</a>
            </>
        ),
    },
    {
        title: "Alojamiento",
        icon: "house",
        idTarget: "collapseAlojamiento",
        isOpen: false,
        content: (
            <>
                <div className="aside__item">
                        <input className="form-check-input" type="checkbox" value="" id="cabañas"/>
                        <label className="aside__label" htmlFor="cabañas">
                            Cabañas
                        </label> 
                    <InfoIcon title="Información sobre Cabañas" />
                </div>

                <div className="aside__item aside__item--selected">
                    <input className="form-check-input" type="checkbox" id="parapente2"/>
                    <label htmlFor="parapente2" className="aside__label">Hoteles</label>
                     <InfoIcon title="Información sobre Hoteles" />
                </div>
                <a href="#" className="aside__item aside__link">Ver 21 más</a>
            </>
        ),
    },
    {
        title: "Precio",
        icon: "pricetag",
        idTarget: "collapsePrecio",
        isOpen: false,
        content: (
            <>
                <input type="text" className="aside__input-range" placeholder="Mínimo" />
                <input type="text" className="aside__input-range" placeholder="Máximo" />
            </>
        ),
    },
];


const Aside = ({ toggleFilter }) => {
    const accordionId = "asideFilterAccordion"; 

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltips = [...tooltipTriggerList].map(tooltipTriggerEl => 
            new Tooltip(tooltipTriggerEl)
        );
        return () => {
             tooltips.forEach(tooltip => tooltip.dispose());
        };

    }, []);

    return (
        <aside className="aside">
            <div className="aside__title">
                <h2>Filtrar mi búsqueda</h2>
                <button type="button" className="btn-close" onClick={toggleFilter} aria-label="Close"></button>
            </div>

            <div className="accordion" id={accordionId}> 
                
                {sections.map((section, index) => (
                    <div className="accordion-item aside__section-list" key={index}> 
                        
                        <h2 className="accordion-header aside__header" id={`heading-${section.idTarget}`}>
                            <button
                                className={`aside__button accordion-button ${!section.isOpen ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${section.idTarget}`}
                                aria-expanded={section.isOpen}
                                aria-controls={section.idTarget}
                            >
                                <Icon className="aside__icon" name={section.icon}></Icon>
                                {section.title}
                            </button>
                        </h2>
                        
                        <div
                            id={section.idTarget}
                            className={`accordion-collapse collapse ${section.isOpen ? 'show' : ''}`}
                            aria-labelledby={`heading-${section.idTarget}`}
                            data-bs-parent={`#${accordionId}`}
                        >
                            <div className="accordion-body aside__body">
                                {section.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Aside;