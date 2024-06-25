import { useParams } from "react-router-dom";

const ItemDetail = () => {

    const id = useParams().id
    console.log(id);
    
    return (
        <div className="col-3">
            <h2>Item detail</h2>
        </div>
    );
};

export default ItemDetail;
