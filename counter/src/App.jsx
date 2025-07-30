import { useState } from "react"
import './App.css'
import Rohaz from './Rohaz'


function App() {
  let [counter , setCounter] = useState(10)
  const addValue = () => 
  {
    console.log('clicked' , counter)
    setCounter(counter + 1)
    if(counter == 30)
    {
      setCounter(30)
    }
  }

const removeValue = () => 
{
  setCounter(counter - 1)
  if(counter == 0)
  {
    setCounter(0)
  }
}

  return (

    // This is a fragment ... khali div to write multiline html
    <>

   <div className="center">
    <Rohaz />
    
     <h2>COUNTER</h2>
     <h3>Value {counter}</h3>

     <br></br>

     <button onClick={addValue}>Add</button>
     <br></br><br></br>
     <button onClick={removeValue}>Remove</button>

   </div>
   </>
  )
}

export default App
