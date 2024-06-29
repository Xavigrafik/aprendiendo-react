import { Link } from 'react-router-dom';
import '../styles/cardItem.scss';
import { handleAddToCart} from '../helpers/addToCart';

import { AddBtn } from './AddBtn';
import { useState } from 'react';

const CardItem = ( {item} ) => {

    const [cantidad, setCantidad] = useState(1);

    const handleSumar = ()=> {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    
    const handleRestar = ()=> {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleAddToCartClick = ()=> {
        handleAddToCart(item.id, cantidad)
    }

    return (
        <div className="col-3">
            <div className="cardItem">
                <div
                    className="imgWrapper"
                    style={{ backgroundImage: 'url(' + item.imagen + ')' }}
                ></div>
                <div className="textWrapper">
                    
                    <Link className="titulo" to={`/item/${item.id}`} >{item.id} - {item.titulo}</Link>

                    <p className={`badge categoria_${item.categoria}`}>{item.categoria}</p>
                    
                    <p className="precio">{item.precio}€</p>
                    <p className="stock">{item.stock} uds.</p>
                    
                    <AddBtn cantidad={cantidad} handleAddToCart={handleAddToCartClick} handleSumar={handleSumar} handleRestar={handleRestar}></AddBtn>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
