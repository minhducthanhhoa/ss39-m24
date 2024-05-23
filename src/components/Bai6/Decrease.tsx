import { useReducer, useState } from "react";



export default function Decrease() {
    const [count,setcount] = useState<number>(10);
    const reducer = (state:any,action:any) =>{
        switch (action) {
            case "decrease":
            return state-1
        
            default:
            return state;
        }
    }
    let initialCount = 0;
    const [state,dispatch]  = useReducer(reducer,initialCount);
    
    const handleClick = ()=>{
        dispatch("decrease")
    }
  return (
    <div>
            <p>Giá trị biến count: {state}</p>
            <button onClick={handleClick}>Decrease</button>
    </div>
  )
}
