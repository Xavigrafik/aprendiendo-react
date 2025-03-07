// import React, { useContext } from 'react'
import useTodos from '../hooks/useTodos'
import Button from './Button'

function TodoList() {
    const { todos, addTodo, toggleTodo } = useTodos()

    return (
        <>
            <Button
                isLoading = {false}
                className="mb-3"
                onClick={() => {
                    addTodo({
                        id: todos.length,
                        name: 'nuevo',
                        completed: false,
                    })
                }}
            >
                Add to-do
            </Button>

            <ul className="list-group mb-3">
                {todos.map((t) => (
                    <li
                        key={t.id}
                        className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between cursor-pointer ${
                            t.completed
                                ? 'text-green list-group-item-success '
                                : 'text-danger'
                        }`}
                        onClick={() => {
                            toggleTodo(t)
                        }}
                    >
                        {t.id}. {t.name}{' '}
                        <span
                            className={`badge rounded-pill ${
                                t.completed ? 'bg-success' : 'bg-danger'
                            }`}
                        >
                            {t.completed ? 'YES' : 'NO'}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList
