import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //all setCounters executed simultaneously in a batch by diffing algorithm of react 
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    //value take from callback in the arrow function
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    console.log("Value incresed");
  }

  const subtractValue = () => {
    // counter = (counter == 0) ? 0 : counter-1;
    setCounter(counter-1);
    setCounter(counter-1);
    setCounter(counter-1);
    console.log("Value decreased");
  }

  return (
    <>
      <h1>Masti aur learn</h1>
      
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={subtractValue}>Decrease Value</button>

      <hr />
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
