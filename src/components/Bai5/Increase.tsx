import { useReducer, useState } from "react";

export default function Increase() {
    const [count,setcount] = useState<number>(0);
    const reducer = (state:any,action:any) =>{
        switch (action) {
            case "increase":
            return state+1
        
            default:
            return state;
        }
    }
    let initialCount = 0;
    const [state,dispatch]  = useReducer(reducer,initialCount);
    
    const handleClick = ()=>{
        dispatch("increase")
    }
    return (
        <div>
            <p>Giá trị biến count: {state}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}
