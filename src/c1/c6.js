import React,{useState} from "react";
function Dai() {
    const [name,setname]=useState(0);
    return(
        <div>
            <h1>useState</h1>
            <h2>{name}</h2>
            <button onClick={()=> setname(name + 1)}>Increment</button>
            <button onClick={()=> setname(name - 1)}>Decrement</button>
            <button>new</button>
        </div>
    )
}
export default Dai
