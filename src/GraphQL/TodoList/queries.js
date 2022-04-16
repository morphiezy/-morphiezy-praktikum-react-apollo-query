import { gql } from "@apollo/client";

const GET_TODO_LIST = gql`
  query getTodoList {
    todolist(order_by: { id: asc }) {
      id
      title
      is_done
    }
    user {
      id
      name
    }
  }
`;

const GET_TODO_BY_PARAM = gql`
  query getTodo($user_id: Int!, $title: String!) {
    todolist(where: { id_user: { _eq: $user_id }, title: { _ilike: $title } }) {
      id
      is_done
      title
    }
  }
`;


export {GET_TODO_LIST,GET_TODO_BY_PARAM}