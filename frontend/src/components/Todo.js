import { gql, useMutation } from '@apollo/client'
import React from 'react'
import moment from 'moment'
import updateTodoStatusById from '../mutations/updateTodoStatusById'

import { useLocation } from 'react-router-dom'

const Todo = ({ todo }) => {
  const { pathname } = useLocation()

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

  // if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <h3>{todo.title}</h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'grey',
        }}
      >
        <div style={{ marginRight: '10px' }}>{todo.type}</div>
        <label style={{ marginRight: '10px' }}>
          <input
            type='checkbox'
            checked={todo.isDone}
            onChange={handleCheckboxChange}
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
          Is Done
        </label>

        <div style={{ marginRight: '10px' }}>
          {moment(todo.createdAt).format('MMMM Do YYYY')}
        </div>
      </div>
      {pathname.match('/todos/') && (
        <div>
          <p>{todo.id}</p>
          <p>{todo.text}</p>
        </div>
      )}
    </div>
  )
}

export default Todo
