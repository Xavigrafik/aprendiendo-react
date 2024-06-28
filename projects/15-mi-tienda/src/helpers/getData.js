import data from "../data/items.json";

export const getAllItems = () => {
  return new Promise((resolve) => {
      console.log('damelo todo');
           resolve(data);
    })
}

// CATEGORIAS
export const getAllCategories = () => {
  return new Promise((resolve) => {
    // Recopila todas las categorías en un solo array
    const allCategories = data.map(item => item.categoria);

    // Elimina los duplicados utilizando un Set
    const uniqueCategories = [...new Set(allCategories)];

    resolve(uniqueCategories);
  });
}

// ITEM BY ID
export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
      const itemFind = data.find((el) => el.id === parseInt(id, 10));
      //console.log("Buscando ID:", id);
      //console.log("itemFind:", itemFind);
      
      if (itemFind) {
          resolve(itemFind);
      } else {
          reject({
              error: "No se encontró el id"
          });
      }
  });
}
    

// ITEM BY CATEGORIA
export const getItemByCategoria = (cat) => {

  return new Promise((resolve, reject) => {
    const itemsFind = data.filter((el) => el.categoria === cat);
    
    // Descomentar para depuración
     //console.log("Buscando categoría:", cat);
    //console.log("itemsFind:", itemsFind);

    if (itemsFind.length > 0) {
      resolve(itemsFind);
    } else {
      reject({
        error: "No se encontró esa categoría"
      });
    }
  });
}
