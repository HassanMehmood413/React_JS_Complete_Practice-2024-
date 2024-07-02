import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(12)
  const AddValue = ()=>{
    if(count < 20){
      setCount(count =  count + 1)
      setCount(count =  count + 1)
      setCount(count =  count + 1)
      setCount(count =  count + 1)
      // console.log(count)

    }
  }
  const DecreaseValue = ()=>{
    if(count > 0)
    setCount(count = count - 1)
    console.log(count)
  }

  return (
    <>
      <h1>Code With Hassan</h1>
      <h2>Counter Value: {count} </h2>
      <button onClick={AddValue}>Increase Value</button>
      <button onClick={DecreaseValue}>Decrease Value</button>
      <p>Preview :  {count}</p>

    </>
  )
}

export default App
