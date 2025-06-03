import { useState } from "react"


function init () {
    console.log("init was executed.")
    return Math.random();
}


export default function Counter() {
    let [count, setCount] = useState(init); //initialization
    console.log("Component is rendered");

    let incCount = ()  => {
        setCount((currCount) => {
            return currCount+1;
        });
    };
    return (
        <>
            <h3>count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    )
}