import { useState } from "react";
import useTodos from './hooks/useTodos';

export default function App() {

    const [userId, setUserId] = useState<number | undefined>(undefined);
    const pageSize = 15;
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isPlaceholderData } = useTodos({ page, pageSize });

    if (error) return <h2>{error.message}</h2>
    if (isLoading) return <h2>Cargando...</h2>
    
    return (
        <>
            <h3>Todos</h3>

            <select
                className="d-none"
                value={userId === undefined ? "" : userId}
                onChange={(e) => {
                    const value = e.target.value;
                    setUserId(value === "" ? undefined : Number(value));
                }}
            >
                <option value="">Todos los usuarios</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            <ul>
                {data?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <button disabled={page == 1} onClick={()=>setPage(page -1)} >{'-1'}</button>
            <button onClick={() => setPage(page + 1)}>{'+1'}</button>
            {isPlaceholderData && <span>Cargando...</span> }
        </>
    )
}

