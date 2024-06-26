import data from "../data/items.json";

export const getAllItems = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
           resolve(data);
        }, 100)
    })
}

export const getItemById = (id) => {


    return new Promise((resolve, reject) => {
        
      const itemFind = data.find((el) => el.id == parseInt(id));
      
       //console.log("Buscando ID:", id);
       //console.log("itemFind:", itemFind);
  
        if (itemFind) {
            setTimeout( () => {
                resolve(itemFind);
            }, 500)
      } else {
        reject({
          error: "No se encontró el producto"
        });
      }
    });
}
  

export const pedro = () => {
    console.log('pedro');
}