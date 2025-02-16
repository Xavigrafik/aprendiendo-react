import { useQuery } from '@tanstack/react-query';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const queryTodos = ():Promise<Todo[]> => {
    return fetch(url).then((response)=>response.json())
}

export default function App() {

    const { data } = useQuery({
        queryKey: ["todos"],
        queryFn: queryTodos,
    });
    
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

