import LOGO from '../../assets/Waveless-Color.svg';

const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: block;
      width: 100%;
      background-color: var(--color-bg-secondary-light-default);
      border-top: 1px solid var(--color-primary-low-alpha);
      font-family: var(--font-secondary);
      font-weight: var(--weight-bold);
      color: var(--footer-bottom-fg);
      font-size: var(--text-sm, 14px);
    }

    .footer__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--space-12);
    }

    .footer__logo img {
      height: 32px;
    }

    .footer__bottom-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      text-align: center;
      background-color: var(--footer-bottom-bg);
      
    }

    @media (width >= 1439px) {
      .footer__logo {
        justify-content: flex-start;
      }
    }
  </style>

  <footer class="footer">
        <div class="footer__logo">
            <img src="${LOGO}" alt="Logo Waveless">
        </div>
        <div class="footer__bottom-bar">
            <span id="copyright"></span>&nbsp;Waveless - Todos los derechos reservados.
        </div>
  </footer>
`;

export class OFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.shadowRoot.querySelector('#copyright').textContent = `©${year}`;
  }
}
if (!customElements.get('o-footer')) {
    customElements.define('o-footer', OFooter);
}