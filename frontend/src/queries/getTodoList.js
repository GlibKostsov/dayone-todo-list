import { gql } from '@apollo/client'

export default gql`
  query GetTodoList($orderBy: Ordering, $types: [TodoTypes!]) {
    getTodoList(orderBy: $orderBy, filters: { types: $types }) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`
