import useTodos from "./hooks/useTodos"

export default function App() {

    const { data, error, isLoading } = useTodos();

    if (error) return <h2>{error.message}</h2>
    if (isLoading) return <h2>Cargando...</h2>
    
    return (
        <>
            <h3>Todos</h3>
            <ul>
                {data?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

