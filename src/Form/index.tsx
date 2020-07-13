import React from 'react';
const {memo , useState , useCallback} = React;

interface IProps{
 placeholder? : string 
 value : string 
 onChange : (value:any)=>void
}

const CustomInput : React.FC<IProps> = ({placeholder , value , onChange}): JSX.Element =>{
const [Firstname , setFirstname] = useState<any>("");
const memoizedFirstname = useCallback((value:any)=>setFirstname , [setFirstname])   
return(
  <form>
    <input type="text" placeholder="Firstname" value={"Firstname"} onChange={()=>value} name="Firstname"/>
    <button type="submit">Submit</button>
  </form>
)
}

export default memo(CustomInput)