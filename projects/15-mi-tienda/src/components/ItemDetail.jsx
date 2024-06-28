import { Link, useNavigate, useParams,  } from "react-router-dom";
import { getItemById } from "../helpers/getData";
import { useEffect, useState  } from "react";

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
            <div className="col-3">
                <h2>Item detail:</h2>
                <img src={item.imagen} className="img-fluid" />
                <strong className="border border-bottom-0 p-2 d-block">id: {item.id}</strong>
                <div className="border p-2 mb-3">titulo: {item.titulo}</div>

                <Link className="btn btn-primary btn-lg" to="/">Home</Link>
            </div>
        );
    } else {
        <h1>No se ha ebcontrado el item</h1>
    }

};

export default ItemDetail;
