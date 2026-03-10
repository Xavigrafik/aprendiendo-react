const logoUrl = new URL('./../../assets/Waveless-Color.svg', import.meta.url).href;

const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: block;
      width: 100%;
      background-color: var(--nav-bg);
      border-bottom: 1px solid var(--nav-bd);
      font-family: var(--font-main, sans-serif);
      font-weight: 600;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding-inline: var(--space-8);
    }

    .navbar__logo {
        margin-right: var(--space-4);
    }
    .navbar__logo img {
      max-width: 145px;
      display: block;
    }

    /* Desktop/Tablet Collapse */
    .navbar__collapse {
      display: none;
      height: 100%;
      width: 100%;
    }

    .navbar__list {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      display: flex;
      gap: var(--space-4, 16px);
      height: 100%;
      height: 100%;
      max-width: 100%;
      flex-wrap: wrap;
    }

    .navbar__item {
      display: flex;
      align-items: center;
      gap: var(--space-2, 8px);
      padding: 0 var(--space-3, 12px);
      cursor: pointer;
      color: var(--nav-icon-default);
      transition: color 0.2s ease;
      position: relative;
    }

    .navbar__item:hover {
      color: var(--nav-icon-hover);
    }

    .navbar__item a {
        text-decoration: none;
        display: flex;
        gap: 5px;
        align-items: center;
        color: var(--nav-icon-default);
    }

    .navbar__item--active {
        border-bottom: 2px solid var(--brand-orange);
        color: var(--color-fg-primary-dark-default);
    }
    
    
    .navbar__item--active::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid var(--color-bd-secondary-medium-default);
    }

    .navbar__item--active:hover {
        border-bottom-color: var(--color-fg-secondary-dark-default);
    }
    
    .navbar__item--active:hover::after {
        border-bottom-color: var(--color-fg-secondary-dark-default);
    }

    /* REDUCIDO PROVISIONAL */
    /* @todo: revisar posibilidades de  */
    @media (743px <= width <= 969px) {
        .navbar {
            padding-inline: 12px;
        }
        .navbar__logo img {
            max-width: 120px;
        }
        .navbar__collapse{
            gap: 0 10px !important;
        }
        .navbar__list {
            justify-content: center;
        }
        .navbar__item {
            padding: 3px;
        }
        .navbar__item a-icon {
            display:none;
        }
    }
    
    .navbar__hamburger {
      display: flex;
      cursor: pointer;
    }
    @media (width >= 1022px) {
        .navbar__actions{
            display: flex;
        }
    }

    @media (width >= 743px) {
      .navbar__actions{
          display: flex;
      }
      .navbar__hamburger {
        display: none;
      }
      .navbar__collapse {
        display: flex;
        align-items: center;
        gap: var(--space-8, 32px);
      }
    }
  </style>

  <nav class="navbar container">

    <div class="navbar__logo">
      <slot name="logo">
        <img src="${logoUrl}" alt="Logo">
      </slot>
    </div>

    <div class="navbar__collapse">
        <ul class="navbar__list"
                aria-label="Main navigation">
            <li class="navbar__item navbar__item--active">
                <a href="#!">
                <a-icon aria-hidden="true" name="mountain"></a-icon> Aventura
                </a>
            </li>
            <li class="navbar__item">
                <a href="#!">
                <a-icon aria-hidden="true" name="globe"></a-icon> Destinos
                </a>
            </li>
            <li class="navbar__item">
                <a href="#!">
                <a-icon aria-hidden="true" name="house"></a-icon> Alojamiento
                </a>
            </li>
            <li class="navbar__item">
                <a href="#!">Sobre nosotros</a>
            </li>
        </ul>

        <div class="navbar__actions">
            <a-button>Reserva</a-button>
        </div>
    </div>

    <div class="navbar__hamburger">
        <a-icon aria-hidden="true" name="hamburger" size="lg"></a-icon>
    </div>
  </nav>
`;

export class ONavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

if (!customElements.get('o-navbar')) {
    customElements.define('o-navbar', ONavbar);
}