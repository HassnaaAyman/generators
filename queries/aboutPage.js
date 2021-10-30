import { graphql } from "react-relay";

export const aboutPage = graphql`
  mutation aboutPage_aboutPageQuery($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      email
    }
  }
`;
