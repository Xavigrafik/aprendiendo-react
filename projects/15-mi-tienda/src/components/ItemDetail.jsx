import { Link, useNavigate, useParams,  } from "react-router-dom";
import { getItemById } from "../helpers/getData";
import { useEffect, useState  } from "react";
import { AddBtn } from './AddBtn';
const ItemDetail = () => {
    
    const id = useParams().id
    const [item, setItem] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        getItemById(id)
            .then((res) => {
                setItem(res);
            }).catch(error => {
                //console.error(error);
                navigate('/404');
            });
    }, [id]);

    
    if (item) {
        return (
            <div className="col-6">
                <img src={item.imagen} className="img-fluid" />
                <strong className="p-1 d-block">{item.id} {item.titulo}</strong>
                <div className="p-1 mb-3">{item.descripcion}</div>
                <div className="p-1 mb-3">{item.categoria}</div>
                <div className="p-1 mb-3">Quedan {item.stock}uds.</div>
                <div className="p-1 mb-3">{item.precio}€</div>
                <br />
                <AddBtn item={item}></AddBtn>
                <br />
                <Link className="btn btn-primary btn-lg" to="/">Home</Link>
            </div>
        );
    } else {
        <h1>No se ha ebcontrado el item</h1>
    }

};

export default ItemDetail;
