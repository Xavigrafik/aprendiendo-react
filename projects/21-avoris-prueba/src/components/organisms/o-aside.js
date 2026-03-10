const template = document.createElement('template');
template.innerHTML = /*html*/`
<style>
    :host {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        top: var(--aside-top, 0px);
    }

    @media (width >= 1439px) {
        :host {
            position: static;
            width: 264px;
            flex-shrink: 0;
            align-self: flex-start;
            /*display: block;*/
            z-index: auto;
            top: auto;
        }
        .aside {
            position: static;
            transform: none;
            visibility: visible;
            pointer-events: auto;
            box-shadow: none;
            width: 100%;
        }
}

    
    /* --- LAYOUT ASIDE (Drawer & Desktop) --- */
    .aside {
        position: absolute;
        top: 0;
        left: 0;
        width: 264px;
        height: auto;
        background-color: white;
        z-index: 1000;
        box-shadow: 4px 0 15px rgba(0,0,0,0.2);
        background-color:var(--filter-bg);
        
        /* OCULTO*/
        transform: translateX(-110%);
        visibility: hidden;
        pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.5s;
    }

    :host([open]) .aside {
        transform: translateX(0);
        visibility: visible;
        pointer-events: auto;
        overflow: visible;
    }

    @media (width >= 1439px) {
        .aside {
            position: relative;
            height: auto;
            width: 100%;
            top: 96px;
            max-width: 264px;
            background-color: var(--filter-bg, #f4f4f4);
            border-radius: 20px;
            box-shadow: none;
            transform: none;
            visibility: visible;
            pointer-events: auto;
            
        }
        .aside__header .btn-close { display: none; }
    }

    /* --- ESTRUCTURA INTERNA --- */
    .aside__header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--color-divisor-light);
    }

    .aside__content {
      flex: 1;
      padding: 20px;
    }

    .filter-section {
      margin-bottom: 8px;
    }

    /* --- TÍTULOS Y ESTADOS --- */
    .filter-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-fg-primary-dark);
        font-weight: 600;
        height: 48px;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .filter-title div {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .filter-title a-icon[name="chevron-right"] {
        transition: transform 0.3s ease;
    }

    /* Estado Abierto: Color y Rotación */
    .filter-section[data-open="true"] .filter-title {
        color: var(--color-secondary-600, #FF8F50);
    }

    .filter-section[data-open="true"] .filter-title a-icon[name="chevron-right"] {
        transform: rotate(90deg);
    }

    /* --- ANIMACIÓN DE COLAPSO (Unificada) --- */
    .filter-options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-left: 36px;
        overflow: hidden;
        /* Estado cerrado */
        max-height: 0;
        opacity: 0;
        transition: max-height 0.3s ease-out, opacity 0.2s, padding 0.3s, margin 0.3s;
        padding-bottom: 0;
        margin-top: 0;
    }

    .filter-section[data-open="true"] .filter-options {
        max-height: 1000px;
        opacity: 1;
        padding-bottom: 16px;
        margin-top: 8px;
        overflow: visible;
    }

    /* --- CHECKBOXES --- */
    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-secondary);
      font-size: 14px;
      font-weight: 600;
      color: #333;
      cursor: pointer;
      user-select: none;
    }

    .checkbox-item input[type="checkbox"] {
      appearance: none;
      width: 18px;
      height: 18px;
      margin: 0;
      border: 1px solid #622F60;
      border-radius: 2px;
      background-color: white;
      display: grid;
      place-content: center;
      cursor: pointer;
    }

    .checkbox-item input[type="checkbox"]:checked {
      background-color: #FF8F50;
    }

    .checkbox-item input[type="checkbox"]:checked::before {
      content: "";
      width: 8px;
      height: 4px;
      border-left: 2px solid #622F60;
      border-bottom: 2px solid #622F60;
      transform: rotate(-45deg) translate(1px, -1px);
    }

    /* --- TOOLTIP (Fix para overflow:hidden) --- */
    .checkbox-item a-icon[data-info] {
        position: relative;
        display: inline-flex;
    }
    
    .checkbox-item a-icon[data-info]:hover::after {
        content: attr(data-info);
        position: absolute;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        color: #333;
        background-color: #fff;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        pointer-events: none;
    }

    .checkbox-item a-icon[data-info]:hover::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: #fff;
        z-index: 1000;
    }

    .show-more {
      font-family: var(--font-secondary);
      color: #622F60;
      font-size: 14px;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
      margin-top: 4px;
    }
</style>

<aside class="aside">
    <div class="aside__header">
      <h2 style="font-size: 18px; margin: 0;">Filtrar mi búsqueda</h2>
      <a-icon name="close" size="sm" class="btn-close" id="close-btn" style="cursor:pointer"></a-icon>
    </div>

    <div class="aside__content">
      
    <div class="filter-section" data-open="false">
        <div class="filter-title">
            <div><a-icon name="globe"></a-icon> Destinos</div>
            <a-icon name="chevron-right"></a-icon>
        </div>
        <div class="filter-options">
            <label class="checkbox-item">
            <input type="checkbox"> Tailandia
            <a-icon name="info" size="sm" data-info="Templos, playas y selva tropical"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> Costa Rica
            <a-icon name="info" size="sm" data-info="Pura vida: biodiversidad y volcanes"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> Sudáfrica
            <a-icon name="info" size="sm" data-info="Safaris y paisajes de costa impresionantes"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> Japón
            <a-icon name="info" size="sm" data-info="Tradición milenaria y tecnología punta"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> Egipto
            <a-icon name="info" size="sm" data-info="Cuna de civilizaciones y pirámides"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> India
            <a-icon name="info" size="sm" data-info="Espiritualidad, colores y cultura vibrante"></a-icon>
            </label>
            
            <label class="checkbox-item">
            <input type="checkbox"> Marruecos
            <a-icon name="info" size="sm" data-info="Zocos, desierto y arquitectura bereber"></a-icon>
            </label>
            
            <span class="show-more">Ver más destinos</span>
        </div>
        </div>

      <div class="filter-section" data-open="true">
        <div class="filter-title">
          <div><a-icon name="mountain"></a-icon> Aventura</div>
          <a-icon name="chevron-right"></a-icon>
        </div>

        <div class="filter-options">
            <label class="checkbox-item">
                <input type="checkbox"> Quads
                <a-icon name="info" size="sm" data-info="Ruta en 4x4 por terrenos naturales"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Parapente
                <a-icon name="info" size="sm" data-info="Vuelo biplaza con monitor titulado"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Rafting
                <a-icon name="info" size="sm" data-info="Descenso de ríos en balsa neumática"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Explora
                <a-icon name="info" size="sm" data-info="Trekking guiado por zonas vírgenes"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Buceo
                <a-icon name="info" size="sm" data-info="Inmersión con equipo autónomo y guía"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Paracaídas
                <a-icon name="info" size="sm" data-info="Salto tándem a 4.000 metros de altura"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Snowboard
                <a-icon name="info" size="sm" data-info="Descenso en pistas de alta montaña"></a-icon>
            </label>
            <label class="checkbox-item">
                <input type="checkbox"> Surf
                <a-icon name="info" size="sm" data-info="Clases y alquiler de tabla en costa"></a-icon>
            </label>
            <span class="show-more">Ver 21 más</span>
        </div>
      </div>

      <div class="filter-section" data-open="false">
        <div class="filter-title">
          <div><a-icon name="house"></a-icon> Alojamiento</div>
          <a-icon name="chevron-right"></a-icon>
        </div>
        <div class="filter-options">
            <span>Próximamente...</span>
        </div>
      </div>

      <div class="filter-section" data-open="true">
        <div class="filter-title">
          <div><a-icon name="pricetag"></a-icon> Precio</div>
          <a-icon name="chevron-right"></a-icon>
        </div>
        <div class="filter-options">
            <a-input placeholder="Mínimo"></a-input>
            <a-input placeholder="Máximo"></a-input>
        </div>
      </div>
    </div>
</aside>
`;

export class OAside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const closeBtn = this.shadowRoot.getElementById('close-btn');
        closeBtn?.addEventListener('click', () => {
            this.removeAttribute('open');
        });

        // --- ABRIR/CERRAR SECCIONES ---
        this.shadowRoot.addEventListener('click', (e) => {
            const title = e.composedPath().find(el => el.classList?.contains('filter-title'));

            if (title) {
                const section = title.closest('.filter-section');
                const isOpen = section.getAttribute('data-open') === 'true';
                section.setAttribute('data-open', !isOpen);
            }
        });

        // --- FILTROS ---
        this.shadowRoot.addEventListener('change', () => this._emitFilters());
        this.shadowRoot.querySelectorAll('a-input').forEach(input => {
            input.addEventListener('input', () => this._emitFilters());
        });
    }

    _emitFilters() {
        const checkedCountries = Array.from(
            this.shadowRoot.querySelectorAll('.filter-section:nth-of-type(1) input[type="checkbox"]:checked')
        ).map(cb => cb.parentElement.textContent.replace('info', '').trim().toLowerCase());

        const checkedAdventures = Array.from(
            this.shadowRoot.querySelectorAll('.filter-section:nth-of-type(2) input[type="checkbox"]:checked')
        ).map(cb => cb.parentElement.textContent.replace('info', '').trim().toLowerCase());

        const minInput = this.shadowRoot.querySelector('a-input[placeholder="Mínimo"]');
        const maxInput = this.shadowRoot.querySelector('a-input[placeholder="Máximo"]');

        this.dispatchEvent(new CustomEvent('filter-change', {
            detail: {
                countries: checkedCountries,
                categories: checkedAdventures,
                priceRange: {
                    min: parseFloat(minInput?.value) || 0,
                    max: parseFloat(maxInput?.value) || Infinity
                }
            },
            bubbles: true,
            composed: true
        }));
    }
}

if (!customElements.get('o-aside')) {
    customElements.define('o-aside', OAside);
}