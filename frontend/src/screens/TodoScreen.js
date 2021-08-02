import React from 'react'
import { useQuery } from '@apollo/client'
import getTodoById from '../queries/getTodoById'
import { Link } from 'react-router-dom'

import Todo from '../components/Todo'

const TodoScreen = ({ match, history }) => {
  const { loading, error, data } = useQuery(getTodoById, {
    variables: { id: match.params.id },
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Todo Details</h1>
      <Link to='/'>Back</Link>
      <Todo todo={data.getTodoById} />
    </div>
  )
}

export default TodoScreen
