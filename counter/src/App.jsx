
import './App.css'
import { useState } from 'react';

function App() {
 let [counter,setCounter] = useState(0) 

  // let counter = 15
  const addValue=()=>{
   console.log("value added",counter);
   counter=counter+1;
   setCounter(counter)
    }
    const removeValue=()=>{
    setCounter(counter-1 )
    }
  
  
  
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>add value</button>
     <br/>
     <button onClick={removeValue}>remove vaalue</button>
   </>

  )
}


export default App
