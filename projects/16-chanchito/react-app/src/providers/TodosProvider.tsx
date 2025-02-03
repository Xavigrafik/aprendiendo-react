import { ReactNode, useState } from "react";
import { Todo } from "../types";
import TodosContext from "../contexts/TodosContext";

type Props = {
    children : ReactNode
}


export default function TodosProvider({children}: Props) {

    const [todos, setTodos] = useState<Todo[]>(
        [
            { id: 5, name: "Default task", completed: false },
            { id: 4, name: "Default task", completed: false },
            { id: 2, name: "Default task", completed: true },
            { id: 3, name: "Default task", completed: true },
            { id: 1, name: "Default task", completed: true },
            { id: 0, name: "Default task", completed: true },
        ]
    )
    

    const addTodo = (todo: Todo) => {
        setTodos([todo, ...todos]);
    }


    const toggleTodo = (todo: Todo) => {
        //console.log(todo.id);
    
        const index = todos.findIndex((t) => t.id === todo.id);
    
        const newTodos = [...todos];
    
        newTodos[index] = {...todo,completed: !todo.completed };
    
        setTodos(newTodos);
    };

    /**
    * Obtiene el total de completos/incpmpletos 
    * @author Xavi Barrios
    * @version 2025-02-03
    * @returns {number}
    */
    const getTotal = (completed: boolean) => {
        return  todos.filter((t) => t.completed === completed).length;
    };
    
    // Obtiene el total de completos (true)
    const getTotalCompleted = () => {
        return getTotal(true);
    };
    
    // Obtiene el total de incpmpletos (false)
    const getTotalIncompleted = () => {
        return getTotal(false);
    };
    
    
    return (
        <TodosContext.Provider value={{ todos, addTodo, toggleTodo, getTotal, getTotalCompleted, getTotalIncompleted }}>
             {children}
        </TodosContext.Provider>
    )
}
 