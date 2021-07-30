import React from 'react'
import { Link } from 'react-router-dom'

const Todo = ({ todo }) => {
  return (
    <div>
      <Link to='/'>Back</Link>
      <h1>{todo.title}</h1>
      <p>{todo.text}</p>
      {/* <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        /> */}
      <div>Is Done: {todo.isDone ? 'Yes' : 'No'}</div>
      <div>{todo.createdAt}</div>
    </div>
  )
}

export default Todo
