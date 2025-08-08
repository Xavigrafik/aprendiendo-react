import { useNavigate } from "react-router-dom"


export default function Home() {
    
    const navigate = useNavigate();
    
    return <>
        <h1>Home page</h1>
        <button onClick={()=>navigate("/productos")}>Productos</button>
    </>
}