import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../styles/listItems.scss'

import CardItem from '../components/CardItem';
import { getAllItems, getAllCategories, getItemByCategoria } from '../helpers/getData';

const ListItems = () => {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const cat = useParams().cat;
    
    useEffect(() => {
        getAllCategories().then((res) => {
          setCategories(res);
        });
      }, []);
      
    useEffect(() => {
          
        if (!cat || cat === "all") {

            getAllItems().then((res) => {
                    setItems(res);
            });
            
        } else {

            getItemByCategoria(cat).then((res) => {
                    setItems(res);
            }).catch(error => {
                    console.error(error);
            });
        }
      }, [cat]);

    return (
      <>
            <h4 className='mb-5'>ITEMS:</h4>
            
            <div className="row">
                <div className='categoriesBar' >
                    <Link className='catLink btn btn-sm' to={`/categoria/all`}>All</Link>

                    {categories.length > 0 && 
                        categories.map((cat, index)=>{
                            return (
                                <Link className='catLink btn btn-sm' key={index} to={`/categoria/${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
                            )
                        })
                    }
                </div>
            </div>

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

