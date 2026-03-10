const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      background: var(--card-bg);
      border-radius: var(--card-radius);
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      font-family: var(--font-secondary);
      height: 100%;
      box-shadow: var(--card-shadow);
    }
    :host(:hover) {
        box-shadow: var(--card-shadow-hover);
    }

    .card {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .card__header {
      position: relative;
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }

    .card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card__tag {
      position: absolute;
      top: var(--space-4);
      right: var(--space-4);
      background-color: var(--btn-accent-bg);
      color: var(--color-fg-black-default);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: var(--weight-extrabold);
    }

    .card__body {
      padding: var(--space-4);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: var(--space-2);
    }

    .card__subtitle {
        display:flex;
        align-items: center;
        gap: var(--space-1);
        font-size: var(--text-sm);
        font-family:var(--font-main);
    }

    .subtitle__location {
        color: var(--card-title);
        font-weight: var(--weight-bold);
        margin-bottom: $spacing-5;
    }
    .subtitle__days {
        font-size: var(--text-sm);
        color: var(--tag-text);
        font-weight: var(--weight-medium);
    }

    .card__title {
      margin: 0;
      margin-bottom: auto;
      font-size: var(--text-lg);
      color: var(--card-text);
      line-height: var(--lh-tight);
      font-family:var(--font-secondary);
      font-weight: var(--weight-bold);
    }


    .card__price-section {
      display: flex;
      flex-direction: column;
      color: var(--card-price);
       flex-direction: row-reverse;
       justify-content: space-between;
       width: 100%;
    }

    .card__price-label {
      font-size: var(--text-xs);
      line-height: 1;
    }

    .card__price-value {
      font-size: var(--text-2xl);
      font-weight: var(--weight-bold);
      display: flex;
      align-items: baseline;
      gap: var(--space-1);
      line-height:var(--lh-tight);
    }

    .card__currency {
      font-size: var(--text-sm);
    }

    .card__footer {
      padding: var(--space-3) var(--space-4) var(--space-4) var(--space-4);
      background-color: var(--color-bg-secondary-light-default);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: var(--space-3) var(--space-5);
      
    }
    .card__footer > a-button{
        width:100%;
    }

    .card__details {
      background: transparent;
      border: none;
      color: var(--color-fg-primary-dark-default);
      font-weight: var(--weight-normal);
      font-size: var(--text-sm);
      text-decoration: underline;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: end;
    }
    .card__details > a-icon[name="chevron-left"]  {
        transform: rotate(-90deg);
      }
      
      @media (width >= 743px) {
        .card__footer {
            flex-direction:row;
            align-items:end;
        }
        .card__price-section {
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 320px;
        }
        .card__details {
            text-align: left;
            min-width: 99px;
        }
      }
  </style>

  <article class="card">
    <div class="card__header">
      <span class="card__tag"></span>
      <img class="card__image" src="" alt="">
    </div>
    
    <div class="card__body">
      <span class="card__subtitle">
        <span class="subtitle__location"></span>
        <span class="subtitle__days"></span>
        </span>
      <h3 class="card__title"></h3>
      </div>
      <div class="card__footer">
        <div class="card__price-section">
        <div class="card__price">
            <span class="card__price-label">Desde</span>
            <div class="card__price-value">
                <span class="card__amount"></span>
                <span class="card__currency">€</span>
            </div>
        </div>
            <button class="card__details">Ver desglose <a-icon name="chevron-left" size="sm"></a-icon></button>
        </div>
        <a-button variant="secondary" size="sm">Reservar</a-button>
    </div>
  </article>
`;

export class MCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    set data(item) {
        if (!item) return;
        this._itemData = item;

        const shadow = this.shadowRoot;
        shadow.querySelector('.card__image').src = item.image;
        shadow.querySelector('.card__image').alt = item.title;
        shadow.querySelector('.subtitle__location').textContent = `${item.country}, ${item.continent}`;
        shadow.querySelector('.subtitle__days').textContent = `${item.days} días`;
        shadow.querySelector('.card__title').textContent = item.title;
        shadow.querySelector('.card__amount').textContent = item.price;
        shadow.querySelector('.card__tag').textContent = item.tag;

        /* ABRE MODAL */
        shadow.querySelector('.card__details').onclick = () => {
            this.dispatchEvent(new CustomEvent('open-modal', {
                detail: item,
                bubbles: true,
                composed: true
            }));
        };

        const tagEl = shadow.querySelector('.card__tag');
        if (item.tag) {
            tagEl.textContent = item.tag;
            tagEl.style.display = 'block';
        } else {
            tagEl.style.display = 'none';
        }
    }
}

if (!customElements.get('m-card')) {
    customElements.define('m-card', MCard);
}