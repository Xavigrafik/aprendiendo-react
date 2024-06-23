import '../styles/listItems.scss'

import { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';
import data from '../data/items.json';

const ListItems = () => {

    const [items, setItems] = useState([]);

    const pedirItems = () => {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    };

    useEffect(() => {
        pedirItems().then((res) => {
            setItems(res);
        });
    }, []);

    return (
      <>
      <h4>ITEMS:</h4>
      <div className='listItems row'>
        {items.length > 0 && 
          items.map((item)=>{
            return (
                <CardItem key={item.id} item={item}></CardItem>
            )
          })
        }
      </div>
      </>
    )
};

export default ListItems;

