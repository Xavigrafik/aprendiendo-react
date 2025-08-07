import { Link, Navigate, useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom"

type Props = {};

const ProductDetail = ({ }: Props) => {

    const navigate = useNavigate();
    // navigate es una función que te permite navegar programáticamente.
    // Es útil para redirecciones después de una acción, como enviar un formulario.
    // Ejemplo: navigate("/dashboard", { replace: true });
    // El segundo argumento es un objeto opcional con propiedades como `replace` y `state`.
    // `replace: true` evita que se añada una nueva entrada al historial del navegador.
    // `state` te permite pasar datos a la nueva ruta sin que sean visibles en la URL.

    // ?busqueda=name#hash

    
    const params = useParams();
    console.log("params: ", params);
    // params captura los parámetros dinámicos de la URL.
    // En este caso, si la ruta es "/productos/:id", `params.id` será "1".
    // {
    //     id: "1"
    // }

    const [searchParams, setSearchparams] = useSearchParams();
    console.log("searchParams: ",searchParams.get("busqueda"));
    // searchParams maneja los parámetros de búsqueda de la URL, como "?busqueda=name".
    // El método `get()` se usa para obtener el valor de un parámetro específico.
    // `setSearchparams()` es una función para modificar los parámetros de búsqueda.
    // Ejemplo: setSearchparams({ busqueda: "nuevo valor" });
    // name


    const location = useLocation();
    console.log('location: ', location);
    // location devuelve un objeto con información sobre la URL actual.
    // Es útil si necesitas acceder al `pathname`, `hash`, o `search` de la URL.
    // {
    //      hash: "#hash"
    //      key: "default"
    //      pathname: "/productos/1"
    //      search: "?busqueda=name"
    // }

    console.log();
    
    
    return (
        <>
            <div>ProductDetail</div>
            <button onClick={()=>navigate("/productos")}>Productos</button>
        </>
    )
}

export default ProductDetail