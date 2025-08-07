import { useNavigate } from "react-router-dom"

export default function Home() {
    // throw new Error("Error de prueba");
    const navigate = useNavigate();

    return <>
        <h1>Home</h1>
        <button onClick={()=>navigate("/productos")}>Productos</button>
    </>
}