import { gql } from '@apollo/client'

export default gql`
  query GetTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      createdAt
      type
      isDone
      text
      title
    }
  }
`
