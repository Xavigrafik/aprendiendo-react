import React, { useState } from 'react'; // Importar useState
import "./Aside.scss";
import Icon from '../Icon/Icon';

const AccordionItem = ({ title, icon, content, index, activeIndex, setActiveIndex }) => {
    const isOpen = index === activeIndex;
    const toggleAccordion = () => {
        setActiveIndex(isOpen ? null : index);
    };

    const sectionClass = `aside__section ${isOpen ? 'aside__section--open' : ''}`;

    return (
        <section className={sectionClass}>
            <button 
                className="aside__header" 
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls={`aside-body-${index}`}
            >
                <Icon className="aside__icon" name={icon}></Icon> 
                {title}
                
            </button>

            <div 
                id={`aside-body-${index}`}
                className="aside__body"
                hidden={!isOpen}
            >
                {content}
            </div>
        </section>
    );
};


const Aside = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const sections = [
        {
            title: "Aventura",
            icon: "mountain",
            content: (
                <>
                    <div className="aside__item">
                        <input type="checkbox" id="quads" />
                        <label htmlFor="quads" className="aside__label">Quads</label>
                        <span className="aside__info-icon">ⓘ</span>
                    </div>
                    <div className="aside__item aside__item--selected">
                        <input type="checkbox" id="parapente"/>
                        <label htmlFor="parapente" className="aside__label">Parapente</label>
                        <span className="aside__info-icon">ⓘ</span>
                    </div>
                    <a href="#" className="aside__item aside__link">Ver 21 más</a>
                </>
            ),
        },
        {
            title: "Alojamiento",
            icon: "house",
            content: (
                <>
                    <div className="aside__item">
                        <input type="checkbox" id="quads" />
                        <label htmlFor="quads" className="aside__label">Quads</label>
                        <span className="aside__info-icon">ⓘ</span>
                    </div>
                    <div className="aside__item aside__item--selected">
                        <input type="checkbox" id="parapente" checked readOnly />
                        <label htmlFor="parapente" className="aside__label">Parapente</label>
                        <span className="aside__info-icon">ⓘ</span>
                    </div>
                    <a href="#" className="aside__item aside__link">Ver 21 más</a>
                </>
            ),
        },
        {
            title: "Precio",
            icon: "pricetag",
            content: (
                <>
                    <input type="text" className="aside__input-range" placeholder="Mínimo" />
                    <input type="text" className="aside__input-range" placeholder="Máximo" />
                </>
            ),
            isRange: true, // Ejemplo de propiedad específica si fuera necesaria
        },
        // Aquí podrías añadir más secciones sin modificar el mapeo.
    ];

    return (
        <aside className="aside">
            <h2 className="aside__title">Filtrar mi búsqueda</h2>

            <div className="aside__section-list">
                {/* Mapear la lista de secciones para generar los Acordeones */}
                {sections.map((section, index) => (
                    // Aquí se utiliza el nuevo componente 'AccordionItem' para cada sección
                    <AccordionItem
                        key={index} 
                        title={section.title}
                        icon={section.icon}
                        content={section.content}
                        index={index} // El índice de la sección actual
                        activeIndex={activeIndex} // El índice de la sección abierta
                        setActiveIndex={setActiveIndex} // La función para cambiar el estado
                    />
                ))}
            </div>
        </aside>
    )
}

export default Aside;