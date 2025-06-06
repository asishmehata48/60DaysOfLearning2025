import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      console.log("clicked", counter);
      setCounter(counter + 1);
    }
    else {
      console.log("maximum value reached");
    }
  }

  const removeValue = () => {
    if (counter > 0 ) {
      console.log("removed", counter)
      setCounter(counter - 1);
    }
    else {
      console.log("Minimum value reached")
    }
  }

  return (
    <>
      <h1>Chai aur code: React</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}>
        Add value</button>
      <br />
      <button
      onClick={removeValue}>
        Remove value</button>
    </>
  )
}

export default App
