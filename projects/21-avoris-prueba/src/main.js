import './styles/main.css';
import './components/index.js';

// FILTERS
import { initFilters, positionAside } from './filters.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // MODAL
    const modal = document.querySelector('o-modal');
    document.addEventListener('open-modal', (e) => {
        modal.openWithItem(e.detail);
    });

    // FILTROS
    initFilters();
    positionAside();
});

