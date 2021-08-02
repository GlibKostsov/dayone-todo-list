import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css, jsx } from '@emotion/react'

import TodoListScreen from './screens/TodoListScreen'
import TodoScreen from './screens/TodoScreen'

const style = {
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
}

const App = () => {
  return (
    <div style={style}>
      <Router>
        <Route path='/todos/:id' component={TodoScreen} exact />
        <Route path='/' component={TodoListScreen} exact />
      </Router>
    </div>
  )
}

export default App
