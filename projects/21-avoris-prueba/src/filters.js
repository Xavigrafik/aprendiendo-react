export function initFilters() {
  const aside = document.querySelector('o-aside');
  const cardList = document.querySelector('o-card-list');

  if (!aside || !cardList) {
    console.warn("No se encontró o-aside o o-card-list en el DOM");
    return;
  }

  // Escuchamos  evento personalizado en el o-aside
  aside.addEventListener('filter-change', (e) => {
    const { countries, categories, priceRange } = e.detail;
    cardList.applyFilters(countries,categories, priceRange);
  });
}