
import useTodos from '../hooks/useTodos'


const Dashboard = () => {

    const { todos } = useTodos()
    
  return (
    <div className='bg-light my-3 border p-3'>TOTAL TODOS: {todos.length} </div>
  )
}

export default Dashboard