import destinationsData from './../../data/destinations.json';

const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: block;
      width: 100%;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 56px;
    }
    
    .continent-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6) 0;
    }

    /* TABLET */
    @media (width >= 744px) {
        .continent-group {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }
    /* TABLET LG */
    @media (width >= 1021px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }

    /* DESKTOP */
    @media (width >= 1439px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-5);
        }
    }

    .continent-group h2 {
        font-size: 24px;
        grid-column: 1 / -1;
        font-family: var(--font-secondary);
        margin: 0;
        margin-block: var(--space-6) var(--space-4);
        color: var(--color-gray-900);
    }
    .continent-group:first-of-type h2 {
        margin-top: 0;
    }
    
    .loader {
      text-align: center;
      padding: var(--space-10);
      color: var(--color-gray-400);
    }

    .no-results {
        text-align: center;
        padding: var(--space-10);
        grid-column: 1 / -1;
        font-size: 18px;
    }
  </style>
  <div class="card-container" id="card-container">
    <div class="loader">Cargando destinos...</div>
  </div>
`;

export class OCardList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._container = this.shadowRoot.getElementById('card-container');
        this._destinations = destinationsData;
    }

    connectedCallback() {
        // Renderizamos directamente usando los datos importados
        this.render(this._destinations);
    }

    applyFilters(countries, categories, priceRange) {
        const cards = this.shadowRoot.querySelectorAll('m-card');
        let hasVisibleCards = false;

        cards.forEach(card => {
            const data = card._itemData;
            if (!data) return;

            const cardCategory = data.tag?.toLowerCase().trim() || "";
            const cardCountry = data.country?.toLowerCase().trim() || ""; 
            const cardPrice = parseFloat(data.price) || 0;

            const matchesCategory = categories.length === 0 || categories.includes(cardCategory);
            const matchesCountry = countries.length === 0 || countries.includes(cardCountry);
            const matchesPrice = cardPrice >= priceRange.min && cardPrice <= priceRange.max;

            if (matchesCategory && matchesCountry && matchesPrice) {
                card.style.display = ""; 
                hasVisibleCards = true;
            } else {
                card.style.display = "none";
            }
        });

        // Ocultar grupos de continentes vacíos
        this.shadowRoot.querySelectorAll('.continent-group').forEach(group => {
            const visibleInGroup = Array.from(group.querySelectorAll('m-card'))
                                       .filter(c => c.style.display !== 'none');
            group.style.display = visibleInGroup.length > 0 ? "" : "none";
        });
    }

    render(items) {
        if (!this._container) return;
        this._container.innerHTML = '';

        if (!items || items.length === 0) {
            this._container.innerHTML = '<p class="no-results">No se encontraron destinos.</p>';
            return;
        }

        // Agrupar por continente
        const grouped = items.reduce((acc, item) => {
            if (!acc[item.continent]) {
                acc[item.continent] = [];
            }
            acc[item.continent].push(item);
            return acc;
        }, {});

        // Crear secciones por continente
        Object.entries(grouped).forEach(([continent, destinations]) => {
            const groupDiv = document.createElement('div');
            groupDiv.classList.add('continent-group');

            const title = document.createElement('h2');
            title.textContent = continent;
            groupDiv.appendChild(title);

            destinations.forEach(item => {
                const card = document.createElement('m-card');
                card.data = item; // Aquí se activa el setter de m-card
                groupDiv.appendChild(card);
            });

            this._container.appendChild(groupDiv);
        });
    }
}

if (!customElements.get('o-card-list')) {
    customElements.define('o-card-list', OCardList);
}