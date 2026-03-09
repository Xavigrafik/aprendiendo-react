const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: block;
      width: 100%;
    }

    /* Contenedor principal: Diseño Base */
    .field {
      display: flex;
      align-items: center;
      gap: var(--space-3, 12px);
      height: 48px;
      padding: 0 var(--space-5, 20px);
      background-color: var(--input-bg);
      border: 1px solid var(--input-bd);
      border-radius: 100px;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
    }

    /* HOVER  */
    .field:hover {
      border-color: var(--input-bd-hover);
    }

    /* FOCUS */
    .field:focus-within {
      border-color: var(--color-fg-on-white-default);
      box-shadow: 0 0 0 2px var(--color-fg-on-white-default);
      outline: none;
    }

    /* Input */
    input {
      height: 100%;
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-family: var(--font-main, sans-serif);
      font-size: 16px;
      color: var(--color-fg-on-white-default);
      padding: 0;
    }

    input::placeholder {
      color: var(--input-placeholder);
    }

    input:hover::placeholder {
      color: var(--color-fg-primary-dark-hover);
    }

    /* Icono fijo */
    .field__icon {
      display: flex;
      align-items: center;
      color: var(--input-bd);
    }
    .field:hover .field__icon {
      color: var(--color-fg-primary-dark-hover);
    }
  </style>

  <div class="field">
    <div class="field__icon">
      <a-icon name="pricetag"></a-icon>
    </div>
    <input type="text" id="input-el">
  </div>
`;

export class AInput extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._input = this.shadowRoot.getElementById('input-el');
  }

  connectedCallback() {
    // Setea el placeholder inicial si existe el atributo
    if (this.hasAttribute('placeholder')) {
      this._input.placeholder = this.getAttribute('placeholder');
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'placeholder' && this._input) {
      this._input.placeholder = newVal || '';
    }
    }
    
    get value() {
        return this.shadowRoot.getElementById('input-el').value;
    }

    set value(val) {
        this.shadowRoot.getElementById('input-el').value = val;
    }
}

if (!customElements.get('a-input')) {
  customElements.define('a-input', AInput);
}