import '../styles/listItems.scss'

import { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';
import { getAllItems } from '../helpers/getItemById';
// import data from '../data/items.json';

const ListItems = () => {

    const [items, setItems] = useState([]);

    // const pedirItems = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(data);
    //     });
    // };

    useEffect(() => {
      getAllItems().then((res) => {
            setItems(res);
        });
    }, []);

    return (
      <>
      <h4 className='mb-5'>ITEMS:</h4>
        <div className='listItems row'>
          
        {items.length > 0 && 
          items.map((item)=>{
            return (
                <CardItem item={item} key={item.id}></CardItem>
            )
          })
        }
      </div>
      </>
    )
};

export default ListItems;

