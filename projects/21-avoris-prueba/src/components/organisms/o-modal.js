// o-modal.js
export class OModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._render();
    }

    _calculate(price) {
        const total = parseFloat(price) || 0;
        const taxRate = 0.21;
        const base = total / (1 + taxRate);
        const tax = total - base;

        return {
            base: base.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        };
    }

    openWithItem(item) {
        const prices = this._calculate(item.price);

        this.setAttribute('open', '');
        document.body.classList.add('modal-open');

        this.innerHTML = /*html*/`
            <style>
            .modal-title {
                font-family: var(--font-secondary);
                font-size:18px;
                font-weight: var(--weight-bold);
            }
            .modal-body-content .price-row {
                display: flex;
                justify-content: space-between;
            }

            .modal-body-content .price {
                font-weight: 800;
                color: var(--color-fg-black-default);
                font-family: var(--font-secondary);
                font-size: var(--text-xl);
            }

            .title-row  {}
            .title-row .info-days {
                font-size: 18px;
                font-weight: var(--weight-medium);
            }
            .title-row strong {
                margin-right: 10px;
                color: var(--brand-purple);
                font-family: var(--font-main);
                font-size: var(--text-20);
                font-weight: var(--weight-bold);
            }
            .price-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--color-fg-on-white-default);
            }
            .price-row span {
                font-weight: var(--weight-medium);
            }
            .price-row span.price {
                font-weight: var(--weight-bold);
            }
            .modal--footer{
                font-family: var(--font-secondary)
            }
            .modal--footer .price {
                font-size: 22px;
            }

        </style>
           <h2 slot="header" class="modal-title">Desglose de precios</h2>
            <div slot="body" class="modal-body-content">
                <div class="title-row">
                    <strong>${item.country}, ${item.continent} </strong>
                    <span class="info-days">${item.days} días</span>
                </div>
                
                <div class="price-row">
                    <span>Precio antes de impuestos:</span>
                    <span class="price">${prices.base} €</span> 
                </div>
                
                <div class="price-row tax-row">
                    <span>Impuesto (21%):</span>
                    <span class="price">${prices.tax} €</span>
                </div>
            </div>
            <div slot="footer"  class="modal--footer" style="display:flex; justify-content:space-between; width:100%">
                <span>Precio final</span>
                <span class="price">${prices.total} €</span>
            </div>
        `;
        this.setAttribute('open', '');
    }

    close() {
        this.removeAttribute('open');
        document.body.classList.remove('modal-open');
    }

    _render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            :host {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 9999;
                background: rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(2px);
                align-items: center;
                justify-content: center;
                font-family: var(--font-main, sans-serif);
            }
            :host([open]) { display: flex; }
            
            .modal-container {
                background: white;
                border-radius: var(--radius-lg);
                width: 90%;
                max-width: 400px;
                overflow: hidden; 
                box-shadow: var(--card-shadow);
                position: relative;
            }

            /* Secciones con fondo crema */
            .modal-header, .modal-footer {
                background-color: #fdfaf7; /* Ese tono hueso de la imagen */
                padding: var(--space-4);
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #f0ece8;
            }

            .modal-body {
                padding: var(--space-6);
                background: white;
            }

            .modal-footer {
                border-top: 1px solid #f0ece8;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
            }

            .close-icon {
                cursor: pointer;
                font-size: 20px;
                color: #333;
            }

            ::slotted(.modal-title) {
                margin: 0;
                font-size: 18px;
                font-weight: bold;
            }

            ::slotted(.modal-body-content) {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            ::slotted(.price-row) {
                
            }

            ::slotted(.modal-body-content) .price, 
            ::slotted(.price) {
                font-weight: 700;
                color: #000;
            }

            ::slotted([slot="footer"]) {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                font-weight: bold;
                font-size: 20px;
            }
        </style>

        <div class="modal-container">
            <div class="modal-header">
                <slot name="header"></slot>
                <span class="close-icon" id="close-x">✕</span>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>`;

        this.shadowRoot.getElementById('close-x').onclick = () => this.close();
    }
}
customElements.define('o-modal', OModal);