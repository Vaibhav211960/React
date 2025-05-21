import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const increVal = () =>{ 
    if(counter < 20) setCounter(counter + 1)
      else alert('Max limit reached')
  }
  const dcreeVal = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h2>Counter : {counter}</h2>
      <div>
        <button onClick={increVal}> Increaase Val </button>
        <button onClick={dcreeVal}> Decrease Val</button>
      </div>
    </>
  )
}

export default App
