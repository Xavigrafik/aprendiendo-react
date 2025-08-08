import { Link } from "react-router-dom"

export default function ProductPage() {

    const products = [
        {id:1, name: "iphone"},
        {id:2, name: "Android"},
    ]

    return <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Productos page</h1>
                    <ul>
                        {products.map((p) => {
                            return <li key={p.id}>
                                <Link to={`/productos/${p.id}`}>{p.name}</Link>
                           </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    </>
}