/**
*
*
* Register Component
*
*
*/

 import React, {useState, useCallback} from 'react'; 
 import graphql from "babel-plugin-relay/macro"; 
 import { useQuery } from "relay-hooks"; 


/**
* the `componentName` comes from prompets actions
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

const Register: React.FC<{}> = (): JSX.Element => {
   const [stateName , setStateName] = useState<any>(null);
    const memoizedSateName = useCallback((value:any)=>setStateName(value) , [setStateName]);

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
      Register
    </>
    );
    };

    export default  React.memo(Register) ;