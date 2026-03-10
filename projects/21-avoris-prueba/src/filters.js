const nav = document.getElementById('main-nav');
const hero = document.getElementById('main-hero');
const aside = document.getElementById('filters');

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
    if (!aside) return;

    if (window.innerWidth >= 1439) {
        aside.style.top = '';
        aside.style.position = '';
    } else if (nav && hero) {
         const mainBlock = document.querySelector('.main-block');
        const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
        const mainBlockTop = mainBlock.getBoundingClientRect().top + window.scrollY;
        
        const offsetTop = heroBottom - mainBlockTop;
        aside.style.top = `${offsetTop}px`;
        aside.style.position = 'absolute';
    }
}

const handleResize = debounce(positionAside);
window.addEventListener('resize', handleResize);
