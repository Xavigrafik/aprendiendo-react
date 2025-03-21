import { createContext } from "react";
import { Todo } from "../types";


type TodosContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    toggleTodo: (todo: Todo) => void;
    getTotal: (completed:boolean) => number;
    getTotalCompleted: () => number;
    getTotalIncompleted: () => number;

}


export default createContext<TodosContextType>({} as TodosContextType)