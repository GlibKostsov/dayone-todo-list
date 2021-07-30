import React from 'react'
import { useQuery } from '@apollo/client'
import getTodoById from '../queries/getTodoById'

import Todo from '../components/Todo'

const TodoScreen = ({ match, history }) => {
  const { loading, error, data } = useQuery(getTodoById, {
    variables: { id: match.params.id },
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  return (
    <div>
      <Todo todo={data.getTodoById} />
    </div>
  )
}

export default TodoScreen
