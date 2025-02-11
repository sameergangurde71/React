import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "chai",
    age: "21"
  }

  let myArr = [1,2,3,4]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="chaiaurcode" btnText="click me"/>
     <Card username="Sameer"/>
    </>                          
  )
}

export default App
