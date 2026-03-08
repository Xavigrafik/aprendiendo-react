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
    }
    
    /* MOBILE FIRST */
    .continent-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0 var(--space-4);
    }

    /* TABLET */
    @media (min-width: 744px) {
        .continent-group {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }
    /* TABLET LG */
    @media (min-width: 1023px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4) var(--space-5);
        }
    }

    /* DESKTOP */
    @media (min-width: 1440px) {
        .continent-group {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-0) var(--space-5);
        }
    }

    .continent-group h2 {
        font-size:22px;
        margin:0;
        grid-column: 1/-1;
        margin-block: var(--space-6) var(--space-3);
    }
    
    /* DESKTOP */
    @media (min-width: 1440px) {
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