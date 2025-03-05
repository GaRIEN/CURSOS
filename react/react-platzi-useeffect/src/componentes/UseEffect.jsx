import React, { useState, useEffect } from 'react';


const CounterUseEffect=()=>{
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("el contador cambio a: "+count)
    }, [count])
    
    return(
        <div>
            <p>El contador esta en {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Incrementar</button>
        </div>
    )
}
export default CounterUseEffect;