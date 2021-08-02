import React from 'react'
import getTodos from '../queries/getTodoList'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { css, jsx } from '@emotion/react'
import Todo from '../components/Todo'

const TodoList = () => {
  const { loading, error, data } = useQuery(getTodos)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry, something went wrong :(</p>

  if (data.getTodoList.length)
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}> Todo List</h1>
        <ul style={{ paddingLeft: 0, marginTop: '50px' }}>
          {data.getTodoList.map((todo) => (
            <NavLink
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={`/todos/${todo.id}`}
              activeStyle={{ color: 'red' }}
            >
              <Todo todo={todo} />
            </NavLink>
          ))}
        </ul>
      </div>
    )
  return null
}

export default TodoList
