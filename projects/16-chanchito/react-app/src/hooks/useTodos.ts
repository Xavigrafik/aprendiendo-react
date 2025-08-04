import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}


const queryTodos = (userId: number | undefined): Promise<Todo[]> => {

    const url = 'https://jsonplaceholder.typicode.com/todos?';
   
    return axios
        .get(url, { params: { userId } })
        .then((response) =>  response.data);

}


export default function useTodos(userId: number|undefined) {

    return useQuery({
        queryKey: userId ? ["users", userId, "todos"] : ["todos"],
        queryFn: ()=> queryTodos(userId),
    });
}