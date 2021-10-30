import React from 'react';
const {memo , useState , useCallback} = React;


const CustomInput : React.FC<{}> = (): JSX.Element =>{
  const [Address , setAddress] = useState<any>("");
    const memoizedAddress = useCallback((value:any)=>setAddress ,
    [setAddress])
    return(
    <form>
      <input type="text" placeholder="Address" value={ Address } onChange={()=>
      memoizedAddress } name="address" />
      <button type="submit">Submit</button>
    </form>
    )
    }

    export default memo(CustomInput)