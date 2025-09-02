

import "tailwindcss";
import './App.css'
import Card from './card.jsx'

function App() {
  // let myobj={
  //   Name:"Pritee",
  //   channel:"chai aur code"
  // }


  return (
    <>
     <h1 className="bg-blue-400 text-amber-50 p-4 rounded-xl">Tailwand Test</h1>
     < Card channel="pritee" btnText="clickme"/>
    < Card channel="chaaiaurcode" btnText="foolow me"  />
     </>
    
  )
}

export default App
