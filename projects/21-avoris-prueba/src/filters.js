
const aside = document.querySelector('o-aside');
const nav = document.querySelector('o-navbar');
const hero = document.querySelector('.hero');

export function initFilters() {
    const cardList = document.querySelector('o-card-list');
    const toggleBtn = document.getElementById('filter-toggle-button');

    if (!aside || !cardList) {
        console.warn("No se encontró o-aside o o-card-list en el DOM");
        return;
    }

    // BTN FILTRO
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aside.toggleAttribute('open');
    });
    
    // EVETNO FILTRO 
    aside.addEventListener('filter-change', (e) => {
        const { countries, categories, priceRange } = e.detail;
        cardList.applyFilters(countries, categories, priceRange);
    });

}

// DEBOUNCER
function debounce(func, delay = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// POSICIONA EL ASIDE 
export function positionAside() {
    const nav = document.getElementById('main-nav');
    const hero = document.getElementById('main-hero');
    const aside = document.getElementById('filters');

    // Solo ejecutamos si estamos en desktop (>= 1440px)
    if (window.innerWidth >= 1440 && nav && hero && aside) {
        const offsetTop = nav.clientHeight + hero.clientHeight;
        aside.style.top = `${offsetTop}px`;
        aside.style.position = 'sticky';
    } else if (aside) {
        // Limpiamos los estilos si bajamos de resolución
        aside.style.top = '';
        aside.style.position = '';
    }
}

const handleResize = debounce(positionAside);
window.addEventListener('resize', handleResize);

window.addEventListener('DOMContentLoaded', positionAside);