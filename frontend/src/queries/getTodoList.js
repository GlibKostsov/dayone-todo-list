import { gql } from '@apollo/client'

export default gql`
  query GetTodoList($orderBy: Ordering) {
    getTodoList(orderBy: $orderBy) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`
