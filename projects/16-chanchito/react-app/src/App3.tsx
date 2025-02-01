import { useState } from 'react';
import { Todo } from "./types/";
import  Dashboard  from './components/Dashboard';
import  MainContent  from './components/MainContent';
import TodosContext from './contexts/TodosContext';


function App() {

    const [todos, setTodos] = useState<Todo[]>(
        {id:0, name:"Cocinar", completed:false},
    )

    const addTodo = (todo: Todo) => {
        setTodos([todo, ...todos])
    }
    
    return (
        <TodosContext.Provider value={{todos, addTodo}}>
            <Dashboard></Dashboard>
            <MainContent></MainContent>
        </TodosContext.Provider>
    )
 }

export default App;