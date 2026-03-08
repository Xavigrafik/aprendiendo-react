import { Icons } from '../../assets/icons/index.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-flex;
      width: var(--space-6);
      height: var(--space-6);
      color: inherit;
    }

    :host([size="sm"]) {
      width: var(--space-4);
      height: var(--space-4);
    }

    #wrapper, svg {
      width: 100%;
      height: 100%;
      display: block;
      fill: currentColor;
    }
  </style>
  <div id="wrapper" style="display:contents;"></div>
`;
export class AIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() { return ['name']; }

  attributeChangedCallback() { this._render(); }
  connectedCallback() { this._render(); }
_render() {
  const name = this.getAttribute('name');
  const svgContent = Icons[name];

  if (svgContent) {
    const wrapper = this.shadowRoot.querySelector('#wrapper');
    wrapper.innerHTML = svgContent;
    
    const svg = wrapper.querySelector('svg');
    if (svg) {
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      
      // 1. Buscamos todos los elementos internos (path, circle, etc.)
      const elements = svg.querySelectorAll('path, circle, rect, polyline');
      
      elements.forEach(el => {
        // Si el elemento tiene un stroke original, lo respetamos pero le damos el color actual
        if (el.hasAttribute('stroke') && el.getAttribute('stroke') !== 'none') {
          el.setAttribute('stroke', 'currentColor');
          // Si es un icono de líneas, el fill suele ser 'none'
          if (!el.hasAttribute('fill') || el.getAttribute('fill') === 'white') {
             el.setAttribute('fill', 'none');
          }
        } else {
          // Si es un icono de relleno (como una montaña sólida), usamos currentColor
          el.setAttribute('fill', 'currentColor');
        }
      });
    }
  }
}
}

if (!customElements.get('a-icon')) {
    customElements.define('a-icon', AIcon);
}