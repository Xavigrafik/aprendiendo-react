import React, { useContext } from 'react'
import TodosContext from '../contexts/TodosContext'


type Props = {}

const TodoList = ({ }: Props) => {
    const { todos, addTodo } = useContext(TodosContext);
    
  return (
    <div>TodoList</div>
  )
}

export default TodoList