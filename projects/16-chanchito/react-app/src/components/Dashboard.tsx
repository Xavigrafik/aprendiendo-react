import React, { useContext } from 'react'
import TodosContext from '../contexts/TodosContext'



const Dashboard = ({}: Props) => {
  const {todos} = useContext(TodosContext)
  return (
    <div>Dashboard - {todos.length} </div>
  )
}

export default Dashboard