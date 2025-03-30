import { useState } from "react";

function LetCount() {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () =>{
        setCounter(counter + 1)
    }
    
    return <>

        <p> COMPTER: <b>{counter}</b></p>
        <button onClick={incrementCounter}>Increment</button>
    </>
    
} export default LetCount