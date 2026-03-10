
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

    // MODAL PRECIOS
    const globalModal = document.querySelector('o-modal');

    document.addEventListener('open-price-details', (e) => {
        const { item, prices } = e.detail;
        
        const content = `
            <div slot="header">Desglose de precios</div>
            <div slot="body">
                <p>${item.country}, ${item.continent} - ${item.days} días</p>
                <div style="display:flex; justify-content:space-between">
                    <span>Base:</span> <span>${prices.base} €</span>
                </div>
                <div style="display:flex; justify-content:space-between">
                    <span>Impuestos:</span> <span>${prices.tax} €</span>
                </div>
            </div>
            <div slot="footer" style="margin-top:15px; font-weight:bold; border-top:1px solid #eee; padding-top:10px">
                Total: ${prices.final} €
            </div>
        `;
        
        globalModal.open(content);
    });
}

// POSICIONA EL ASIDE 
export function positionAside() {
    if (window.innerWidth < 1440) {
        const offsetTop = nav.clientHeight + hero.clientHeight;
        aside.style.top = `${offsetTop}px`;
    }
}