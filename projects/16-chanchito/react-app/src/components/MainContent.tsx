import React from 'react'
import { Todo } from '../types'
import TodoList from './TodoList'

type Props = {
    todos: Todo[];
    addTodo: (todos: Todo) => void;
}

const MainContent = ({todos, addTodo}: Props) => {
    return (
        <div>
            <h3>Todos</h3>
            <TodoList  />
        </div>
    )
}

export default MainContent
