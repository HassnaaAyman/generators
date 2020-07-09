/**
  *
  *
  * User Component
  *
  *
*/

import React, {useState, useCallback} from 'react'; 
import IProps from './index.interface';
/**
  * the `componentName` comes from prompets actions
  * properCase to captalize each word first Letter 
*/

const User: React.FC<IProps> = (): JSX.Element => {
  const [stateName , setStateName] = useState<any>(null);
 const memoizedSateName = useCallback((value:any)=>setStateName(value) , [setStateName]);
  return (
    <>
      User
    </>
  );
};

export default  React.memo(User) ;
