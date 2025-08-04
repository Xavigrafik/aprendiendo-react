import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import { useQuery } from '@tanstack/react-query';


type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const queryTodos = (): Promise<Todo[]> => {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`Error ${response.status}`)
            return response.json()
    });

}


function useTodos() {

    return useQuery({
        queryKey: ["todos"],
        queryFn: queryTodos,
    });
    
    return useContext(TodosContext)
}

export default useTodos;