import React from 'react'
import getTodos from '../queries/getTodoList'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { css } from '@emotion/react'

const TodoList = () => {
  const { loading, error, data } = useQuery(getTodos)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry, something went wrong :(</p>

  if (data.getTodoList.length)
    return (
      <div
        css={css`
          display: flex;
        `}
      >
        <h1>Todo List</h1>
        <ul>
          {data.getTodoList.map((todo) => (
            <Link to={`/todos/${todo.id}`}>
              <p>{todo.title}</p>
            </Link>
          ))}
        </ul>
      </div>
    )
  return null
}

export default TodoList
