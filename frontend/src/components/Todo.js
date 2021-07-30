import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import updateTodoStatusById from '../mutations/updateTodoStatusById'

const Todo = ({ todo }) => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(updateTodoStatusById)

  const handleCheckboxChange = () => {
    mutateFunction({
      variables: {
        id: todo.id,
        isDone: !todo.isDone,
      },
    })
  }

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <Link to='/'>Back</Link>
      <h1>{todo.title}</h1>
      <p>{todo.text}</p>
      <label>
        <input
          type='checkbox'
          checked={todo.isDone}
          onChange={handleCheckboxChange}
        />
        Is Done
      </label>

      <div>Is Done: {todo.isDone ? 'Yes' : 'No'}</div>
      <div>{todo.createdAt}</div>
    </div>
  )
}

export default Todo
