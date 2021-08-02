import React, { useState } from 'react'
import getTodos from '../queries/getTodoList'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { css, jsx } from '@emotion/react'

import Todo from '../components/Todo'

const DATE_ASC = 'DATE_ASC',
  DATE_DESC = 'DATE_DESC'
const RH = 'RH',
  Tech = 'Tech',
  Marketing = 'Marketing',
  Communication = 'Communication'

const TodoList = () => {
  const [todoListOrdering, setTodoListOrdering] = useState(DATE_ASC)
  const [todoListType, setTodoListType] = useState(RH)

  const { loading, error, data } = useQuery(getTodos, {
    variables: {
      orderBy: todoListOrdering,
      filters: todoListType,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry, something went wrong :(</p>

  if (data.getTodoList.length)
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}> Todo List</h1>
        <div>
          <label for='ordering'>Order: </label>
          <select
            name='ordering'
            id='ordering'
            style={{ marginRight: '10px' }}
            onChange={(e) => setTodoListOrdering(e.target.value)}
          >
            <option value={DATE_DESC}>Descending</option>
            <option value={DATE_ASC}>Ascending</option>
          </select>

          <label for='type'>Order: </label>
          <select
            disabled
            name='type'
            id='type'
            style={{ marginRight: '10px' }}
            onChange={(e) => {
              setTodoListType(e.target.value)
              console.log(todoListType)
            }}
          >
            <option value={RH}>RH</option>
            <option value={Tech}>Tech</option>
            <option value={Marketing}>Marketing</option>
            <option value={Communication}>Communication</option>
          </select>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            <input disabled type='checkbox' />
            Show Completed
          </label>
          <label style={{ marginRight: '10px' }}>
            <input disabled type='checkbox' />
            Todo Business
          </label>
        </div>
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
