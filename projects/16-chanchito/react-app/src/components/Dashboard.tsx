
import useTodos from '../hooks/useTodos'


const Dashboard = () => {

    const { todos, getTotalCompleted, getTotalIncompleted } = useTodos();

    return (
      <>
            <div className="bg-light my-3 border p-3 d-flex justify-content-between">
                <span>TOTAL TODOS: {todos.length}</span>
                <span>YES: {getTotalCompleted()}</span>
                <span>NO: {getTotalIncompleted()}</span>
            </div>
      </>
  )
}

export default Dashboard