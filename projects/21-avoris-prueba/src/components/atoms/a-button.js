const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      /* Variables locales para facilitar el mantenimiento */
      --white: #ffffff;
      --radius-full: 9999px;
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 600;
      font-family: inherit;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: var(--radius-full);
      padding: 12px 24px; /* Default base */
    }

    /* TAMAÑOS */
    .btn--sm { padding: 8px 16px; font-size: 14px; }
    .btn--base { padding: 12px 24px; }
    .btn--lg { padding: 16px 32px; font-size: 20px; }

    /* VARIANT: PRIMARY */
    .btn--primary {
      background-color: #622F60;
      color: var(--white);
    }
    .btn--primary:hover:not(:disabled) {
      background-color: #471F45;
      color: #f2f3f4;
    }
    .btn--primary:disabled {
      background-color: #A0989F;
      color: #635A63;
      cursor: not-allowed;
    }

    /* VARIANT: SECONDARY */
    .btn--secondary {
      background-color: var(--white);
      color: #622F60;
      border-color: #622F60;
    }
    .btn--secondary:hover:not(:disabled) {
      background-color: #F8F7F8;
      border-color: #471F45;
      color: #471F45;
    }

    /* ON DARK LOGIC */
    .btn--onDark.btn--primary {
      background-color: #FF8F50;
      color: #4E250E;
    }
    .btn--onDark.btn--secondary {
      color: var(--white);
    }
  </style>
  <button class="btn">
    <slot></slot>
  </button>
`;

export class AButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._btn = this.shadowRoot.querySelector('button');
  }

  static get observedAttributes() {
    return ['disabled', 'variant', 'size', 'ondark'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  _render() {
    // Limpiamos clases y aplicamos las nuevas basadas en atributos
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'base';
    const onDark = this.hasAttribute('ondark') ? 'btn--onDark' : '';

    this._btn.className = `btn btn--${variant} btn--${size} ${onDark}`;
    this._btn.disabled = this.hasAttribute('disabled');
  }

  connectedCallback() {
    this._render();
  }
}

if (!customElements.get('a-button')) {
  customElements.define('a-button', AButton);
}