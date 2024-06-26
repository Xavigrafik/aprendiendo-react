import { Link } from 'react-router-dom';
import '../styles/cardItem.scss';

const CardItem = ( {item} ) => {
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
                    
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className="addToCart btn">+</button>
                        <div className="addToCart btn">Add to cart {"w"}</div>
                        <button className="addToCart btn">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
