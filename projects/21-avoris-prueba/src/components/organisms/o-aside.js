const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
        display: none !important;
        min-width: 300px;
        font-family: var(--font-main, "Nunito", serif);
        margin-top: 69px;
    }
    
    /* Desktop: Se muestra */
    @media (min-width: 1440px) {
        :host {
            display: block !important;
        }
    }

    .aside {
        background-color: var(--color-bg-secondary-light-default, #FBF6F4);
        border-radius: var(--radius-lg, 16px);
        overflow: hidden;
        border: 1px solid var(--color-border-medium-default, #E0D9E0);
    }


    /* TÍTULO Y HEADER */
    .aside__title {
        font-family: var(--font-title);
        padding: var(--space-6, 24px);
        font-size: 18px;
        font-weight: 700;
        border-bottom: 1px solid var(--color-border-medium-default, #E0D9E0);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-2, 8px);
    }

    .aside__title .btn-close {
        display: flex;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        color: var(--color-fg-primary-dark-default, #622F60);
    }

    @media (min-width: 1440px) {
        .aside__title .btn-close {
            display: none;
        }
    }

    /* SECCIONES Y BOTONES (SIMULANDO ACORDEÓN) */
    .aside__header {
        background: transparent;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        min-height: 48px;
        font-size: 16px;
        font-weight: 700;
        border: 0;
        padding: var(--space-3, 12px) var(--space-6, 24px);
        cursor: pointer;
        text-align: left;
        color: var(--color-fg-primary-dark-default, #622F60);
        transition: background 0.2s ease;
    }

    .aside__header:hover {
        background-color: #fcebe4;
    }

    /* ESTADO ABIERTO / ACTIVO */
    .aside__header.active {
        color: #B85C28; /* Tu naranja de marca */
    }

    /* ITEMS Y CHECKBOXES */
    .aside__section--list {
        padding: var(--space-2, 8px) 0;
    }

    .aside__item {
        padding: 0.75rem var(--space-6, 24px);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: background 0.2s ease;
    }

    .aside__item:hover {
    background-color: rgba(0, 0, 0, 0.02);
    }

    .aside__item input[type="checkbox"] {
        width: 18px;
        height: 18px;
        margin: 0;
        cursor: pointer;
        accent-color: #FF8F50; /* Color nativo para el check */
    }

    .aside__item label {
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        color: var(--color-fg-primary-dark-default, #622F60);
    }

    /* TOOLTIP (SIMPLIFICADO) */
    .aside-tooltip {
        background: #ffffff;
        color: #000000;
        box-shadow: var(--shadow-sm, 0 2px 4px rgba(0,0,0,0.1));
        padding: 6px 10px;
        border-radius: var(--radius-sm, 4px);
        font-size: 12px;
    }
  </style>

  <aside class="aside">
  <div class="aside__title">
    <h4 >Filtrar mi búsqueda</h4>
    </div>
    <div class="aside__content">
      <slot></slot>
      aside content
    </div>
  </aside>
`;

export class OAside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

if (!customElements.get('o-aside')) {
    customElements.define('o-aside', OAside);
}