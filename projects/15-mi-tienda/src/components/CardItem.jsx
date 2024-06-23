import '../styles/cardItem.scss';

const CardItem = ({ item }) => {
    return (
        <div className="col-3">
            <div className="cardItem">
                <div
                    className="imgWrapper"
                    style={{ backgroundImage: 'url(' + item.imagen + ')' }}
                ></div>
                <div className="textWrapper">
                    <p className="titulo">
                        {item.id} - {item.titulo}
                    </p>
                    <p className={`badge categoria_${item.categoria}`}>{item.categoria}</p>
                    
                    <p className="precio">{item.precio}€</p>
                    <p className="stock">{item.stock} uds.</p>
                    <button className="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
