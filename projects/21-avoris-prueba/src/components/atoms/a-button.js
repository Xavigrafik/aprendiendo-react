const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: inline-block;
      width: auto;
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: var(--font-secondary);
      font-weight: var(--weight-semibold);
      line-height: var(--lh-tight);
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: var(--radius-full);
      width: 100%; /* Para que responda al contenedor host */
    }

    /* TAMAÑOS  */
    .btn--sm {
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-xs);
    }
    .btn--base {
      padding: var(--space-3) var(--space-6);
      font-size: var(--text-sm);
    }
    .btn--lg {
      padding: var(--space-4) var(--space-8);
      font-size: var(--text-base);
    }

    /* VARIANT: PRIMARY (Usando Component Tokens) */
    .btn--primary {
      background-color: var(--btn-primary-bg);
      color: var(--btn-primary-fg);
      border-color: var(--btn-primary-bd);
    }
    .btn--primary:hover:not(:disabled) {
      background-color: var(--btn-primary-hover-bg);
      color: var(--btn-primary-fg);
    }
    .btn--primary:disabled {
      background-color: var(--btn-primary-disabled);
      color: var(--color-fg-on-primary-dark-disabled);
      cursor: not-allowed;
      border-color: transparent;
    }

    /* VARIANT: SECONDARY */
    .btn--secondary {
      background-color: var(--btn-secondary-bg);
      color: var(--btn-secondary-fg);
      border-color: var(--btn-secondary-bd);
      box-shadow: 0 4px 4px rgba(0,0,0,0.25);
      }
      .btn--secondary:hover:not(:disabled) {
        color: var(--color-bg-primary-dark-hover);
        border-color: var(--color-bg-primary-dark-hover);
        box-shadow: none;
    }
    .btn--secondary:disabled {
      background-color: var(--secondary-background-disabled);
      color: var(--secondary-foreground-disabled);
      border-color: var(--color-border-primary-dark-disabled);
      cursor: not-allowed;
    }

    /* ON DARK */
    .btn--onDark.btn--primary {
      background-color: var(--btn-accent-bg);
      color: var(--btn-accent-text);
      border-color:var(--btn-accent-bg);
    }
    .btn--onDark.btn--primary:hover:not(:disabled) {
        background-color: var(--btn-accent-hover-bg);
        color: var(--btn-accent-text);
        border-color: var(--btn-accent-hover-bg);
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