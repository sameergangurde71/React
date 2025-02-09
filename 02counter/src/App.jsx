import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
 // let counter = 15

  const addValue = () => {
    
    for(let i = counter; i < 20; i+=counter){
       counter = counter + 1;
      setCounter(counter )
    }
    
  }
  const removeValue = () => {  
     for(let i = counter; i > 0; i-=counter){
       counter = counter - 1;
      setCounter(counter)
   
     }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
    <br />
     <button
     onClick={removeValue}
     >remove value {counter}</button>


    </>
  )
}

export default App
