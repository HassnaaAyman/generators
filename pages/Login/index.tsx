/**
  *
  *
  * Login Component
  *
  *
*/

import React from 'react';
// import useLabelsRequest from 'customHooks/useLabelsRequest';
// import useTheme from 'customHooks/useAppTheme';
import IProps from './index.interface';
 import graphql from "babel-plugin-relay/macro";  
 import { useQuery } from "relay-hooks";  

/**
  * the `componentName` comes from prompts actions
  * properCase to captalize each word first Letter 
*/


const PostsAllPostsQuery = graphql`
  query PostsAllPostsQuery {
    posts {
      id
      title
    }
  }
`;

const Login: React.FC<IProps> = (props): JSX.Element => {

  // useLabelsRequest(login);
  
  // const { colors } = useTheme()
  

 const { props, error } = useQuery(
    PostsAllPostsQuery,
    {}, 
    {
      fetchPolicy: "store-or-network",
    }
  );
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return props;
  }else{
    <div>Loading</div>;
  } 

  return (
    <>
      Login
    </>
  );
};

export default  React.memo(Login) ;
