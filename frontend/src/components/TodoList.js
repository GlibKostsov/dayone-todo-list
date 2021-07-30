import React from 'react'
import getTodos from '../queries/getTodoList'
import { useQuery } from '@apollo/client'

const TodoList = () => {
  const { loading, error, data } = useQuery(getTodos)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry, something went wrong :(</p>

  if (data.getTodoList.length)
    return (
      <ul>
        {data.getTodoList.map((todo) => (
          <p>{todo.title}</p>
        ))}
      </ul>
    )
  return null
}

export default TodoList
