import { gql } from '@apollo/client'

export default gql`
  query {
    getTodoList {
      id
      createdAt
      type
      isDone
      text
      title
    }
  }
`
