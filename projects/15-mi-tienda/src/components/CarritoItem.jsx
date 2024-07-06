import { Link } from 'react-router-dom';
import '../styles/carritoItem.scss';
import useCarrito from '../hooks/useCarrito';

const CarritoItem = ( {item} ) => {

    const { deleteItemFromCart  } = useCarrito(item);
    
    

    return (
        <div className="col-12 mb-3">
            <div className="carritoItem row">

                <div className="imgWrapper col-2" style={{ backgroundImage: 'url(' + item.imagen + ')' }}>
                    
                </div>

                <div className="textWrapper col-3">
                    <div className="titulo" to={`/item/${item.id}`} >{item.id} - {item.titulo}</div>
                    <p className={`badge categoria_${item.categoria}`}>{item.categoria}</p>
                </div>


                <div className="pricewrapper col-3">
                    <p className="precio">{item.precio}€</p>
                </div>


                <div className="unitiesWrapper col-3 d-flex align-items-center justify-content-center">
                     <strong className="h5">x {item.cantidad} uds.</strong> 
                </div>


                <div className="btnWrapper col-auto">
                    <button className='btn btn-outline-danger'  onClick={() => deleteItemFromCart(item.id)}>❌</button>
                </div>
            </div>
        </div>
    );
};

export default CarritoItem;
