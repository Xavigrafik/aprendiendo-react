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
    
    /* MOBILE FIRST */
    .continent-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6) 0;
    }

    /* TABLET */
    @media (width >= 743.99px) {
        .continent-group {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }
    /* TABLET LG */
    @media (width >= 1022.99px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }

    /* DESKTOP */
    @media (width >= 1439.99px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-0) var(--space-5);
        }
    }

    .continent-group h2 {
        font-size:22px;
        grid-column: 1/-1;
        line-height: var(--lh-tight);
        margin:0;
        margin-block: var(--space-4) var(--space-3);
    }
    
    /* DESKTOP */
    @media (width >= 1439.99px) {
        .continent-group h2 {
        }
    }

    
    .loader {
      text-align: center;
      padding: var(--space-10);
      color: var(--color-gray-400);
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
    this._container = this.shadowRoot.querySelector('#card-container');
  }

  // Se ejecuta automáticamente al insertarse en el HTML
  async connectedCallback() {
    await this.fetchDestinations();
  }

  async fetchDestinations() {
      try {
        // DATA DESTINOS
      const response = await fetch('/src/data/destinations.json'); 
      const data = await response.json();
      
      
      this.render(data);
    } catch (error) {
      this._container.innerHTML = `<p>Error al cargar los datos.</p>`;
      console.error(error);
    }
    }
    
    applyFilters(countries, categories, priceRange) {
        const cards = this.shadowRoot.querySelectorAll('m-card');
        
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
                card.style.opacity = "1";
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });

  // 4. Limpieza de contenedores vacíos (Continentes)
  this.shadowRoot.querySelectorAll('.continent-group').forEach(group => {
    const visibleCards = Array.from(group.querySelectorAll('m-card'))
                              .filter(c => c.style.display !== 'none');
    
    // Si no hay cards, ocultamos todo el grupo (incluido el título h2)
    group.style.display = visibleCards.length > 0 ? "" : "none";
  });
}

    render(items) {
        this._container.innerHTML = '';

        const grouped = items.reduce((acc, item) => {
            if (!acc[item.continent]) {
            acc[item.continent] = [];
            }

            acc[item.continent].push(item);
            return acc;
        }, {});

        Object.entries(grouped).forEach(([continent, destinations]) => {

            const groupDiv = document.createElement('div');
            groupDiv.classList.add('continent-group');

            const title = document.createElement('h2');
            title.textContent = continent;
            groupDiv.appendChild(title);

            destinations.forEach(item => {
            const card = document.createElement('m-card');
            card.data = item;
            groupDiv.appendChild(card);
            });

            this._container.appendChild(groupDiv);
        });
    }

    }

if (!customElements.get('o-card-list')) {
  customElements.define('o-card-list', OCardList);
}