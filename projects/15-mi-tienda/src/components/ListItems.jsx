import { useState, useEffect, useContext } from 'react';

import CardItem from '../components/CardItem';
import { CategoryNavBar } from '../components/CategoryNavBar';

import { getAllItems, getAllCategories, getItemsByCategoria, getItemById } from '../helpers/getData';

import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/listItems.scss';


import { CarritoContext } from '../context/CarritoContext';



const ListItems = () => {
    const { cat, id } = useParams();
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const {carrito, setCarrito} = useContext(CarritoContext);

    useEffect(() => {
        getAllCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    useEffect(() => {
        if (id) {
            getItemById(id)
                .then((res) => {
                    if (!res) {
                        navigate('/404');
                    } else {
                        setItems([res]); // Wrap single item in array
                    }
                })
                .catch(error => {
                    console.error(error);
                    navigate('/404');
                });
        } else if (cat) {
            getItemsByCategoria(cat)
                .then((res) => {
                    setItems(res);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // If no cat or id, fetch all items
            getAllItems()
                .then((res) => {
                    setItems(res);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [cat, id, navigate]);
    return (
        <>
        <h4 className='mb-5'>ITEMS:</h4>
        
        
        <CategoryNavBar categories = {categories}></CategoryNavBar>

        <div className='listItems row pb-5'>
          {items.length > 0 ? (
            items.map((item) => (
              <CardItem item={item} key={item.id} />
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </>
    );
};

export default ListItems;
