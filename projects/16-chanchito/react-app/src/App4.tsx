import { useState } from "react";
import useTodos from "./hooks/useTodos"

export default function App() {

    const [userId, setUserId] = useState<number | undefined>(undefined);
    const { data, error, isLoading } = useTodos(userId);

    if (error) return <h2>{error.message}</h2>
    if (isLoading) return <h2>Cargando...</h2>
    
    return (
        <>
            <h3>Todos</h3>

            <select
                value={userId === undefined ? "" : userId}
                onChange={(e) => {
                    console.log('cambiando..');
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
        </>
    )
}

