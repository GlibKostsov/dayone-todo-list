import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css, jsx } from '@emotion/react'

import TodoListScreen from './screens/TodoListScreen'
import TodoScreen from './screens/TodoScreen'

const App = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Router>
        <Route path='/todos/:id' component={TodoScreen} exact />
        <Route path='/' component={TodoListScreen} exact />
      </Router>
    </div>
  )
}

export default App
