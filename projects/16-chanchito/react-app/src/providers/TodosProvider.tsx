import { ReactNode, useState } from "react";
import { Todo } from "../types";
import TodosContext from "../contexts/TodosContext";

type Props = {
    children : ReactNode
}


export default function TodosProvider({children}: Props) {

    const [todos, setTodos] = useState<Todo[]>(
        [
            { id: 0, name: "Default task", completed: false },
            { id: 1, name: "Default task", completed: true },
            { id: 2, name: "Default task", completed: false },
            { id: 3, name: "Default task", completed: true },
            { id: 4, name: "Default task", completed: false },
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
    
    return (
        <TodosContext.Provider value={{ todos, addTodo, toggleTodo }}>
             {children}
        </TodosContext.Provider>
    )
}
 